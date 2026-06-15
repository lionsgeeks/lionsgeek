<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmation;
use App\Models\Booking;
use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use LaravelQRCode\Facades\QRCode;

class BookingController extends Controller
{
    private function firstScalar($value)
    {
        if (is_array($value)) {
            $value = $value[0] ?? null;
        }
        if (is_bool($value) || is_int($value) || is_float($value)) {
            return (string) $value;
        }
        return is_string($value) ? $value : null;
    }

    /**
     * PHP converts dots/spaces in input names to underscores.
     * Keep backend validation aligned with what PHP actually receives.
     */
    private function phpInputKey(string $key): string
    {
        $key = preg_replace('/\s+/u', '_', $key);
        $key = str_replace('.', '_', $key);
        // Replace anything weird with underscore, keep it stable
        $key = preg_replace('/[^A-Za-z0-9_]/u', '_', $key);
        $key = preg_replace('/_+/u', '_', $key);
        return trim($key, '_');
    }

    public function store(Request $request)
    {
        $asJson = $request->expectsJson();
        $result = $this->processBooking($request, $asJson);

        if ($result instanceof JsonResponse) {
            return $result;
        }

        if ($asJson) {
            return response()->json([
                'success' => true,
                'message' => [
                    'en' => 'Booking successful!',
                    'fr' => 'Réservation réussie !',
                    'ar' => 'تم الحجز بنجاح!',
                ],
                'booking' => [
                    'id' => $result->id,
                    'event_id' => $result->event_id,
                    'email' => $result->email,
                ],
            ]);
        }

        return back()->with('success', 'Booking successful!');
    }

    /**
     * JSON booking endpoint for the mobile app (and other API clients).
     */
    public function storeApi(Request $request): JsonResponse
    {
        $result = $this->processBooking($request, true);

        if ($result instanceof JsonResponse) {
            return $result;
        }

        return response()->json([
            'success' => true,
            'message' => [
                'en' => 'Booking successful!',
                'fr' => 'Réservation réussie !',
                'ar' => 'تم الحجز بنجاح!',
            ],
            'booking' => [
                'id' => $result->id,
                'event_id' => $result->event_id,
                'email' => $result->email,
            ],
        ]);
    }

    /**
     * @return Booking|JsonResponse
     */
    private function processBooking(Request $request, bool $asJson = false)
    {
        $request->validate([
            'event_id' => 'required|exists:events,id',
            'answers' => 'nullable|array',
            'admin_override' => 'sometimes|boolean',
        ]);

        $event = Event::findOrFail($request->event_id);
        $schema = is_array($event->booking_form) ? $event->booking_form : [];

        // Default schema if none is configured on the event.
        if (empty($schema)) {
            $schema = [
                ['key' => 'name', 'type' => 'text', 'required' => true],
                ['key' => 'email', 'type' => 'email', 'required' => true],
                ['key' => 'phone', 'type' => 'tel', 'required' => false],
                ['key' => 'gender', 'type' => 'select', 'required' => true, 'options' => [['value' => 'male'], ['value' => 'female']]],
            ];
        }

        $answers = $request->input('answers', []);
        if (!is_array($answers)) {
            $answers = [];
        }

        // Normalize incoming answer keys so they match schema normalization.
        // We do this in a schema-aware way to handle PHP/Inertia differences and avoid "required" mismatches.
        $normalizedAnswers = [];
        foreach ($schema as $field) {
            $key = $field['key'] ?? null;
            if (!is_string($key) || $key === '') continue;
            $phpKey = $this->phpInputKey($key);

            // Candidate sources:
            // - exact key (Inertia JSON can preserve it)
            // - phpKey (PHP can already convert it)
            $value = null;
            if (array_key_exists($key, $answers)) {
                $value = $answers[$key];
            } elseif (array_key_exists($phpKey, $answers)) {
                $value = $answers[$phpKey];
            } else {
                // Fallback: if request keys had other characters but normalize to same phpKey
                foreach ($answers as $k => $v) {
                    if (is_string($k) && $this->phpInputKey($k) === $phpKey) {
                        $value = $v;
                        break;
                    }
                }
            }

            $normalizedAnswers[$phpKey] = $value;
        }

        // Also include any extra keys not present in schema (future-proof)
        foreach ($answers as $k => $v) {
            if (!is_string($k)) continue;
            $phpKey = $this->phpInputKey($k);
            if (!array_key_exists($phpKey, $normalizedAnswers)) {
                $normalizedAnswers[$phpKey] = $v;
            }
        }

        $dynamicRules = [];
        foreach ($schema as $field) {
            $key = $field['key'] ?? null;
            if (!is_string($key) || $key === '') continue;
            $phpKey = $this->phpInputKey($key);
            // Laravel validation uses dot-notation; escape dots in keys we validate.
            $escapedKey = str_replace('.', '\.', $phpKey);

            $required = (bool)($field['required'] ?? false);
            $type = $field['type'] ?? 'text';

            $rules = [];
            $rules[] = $required ? 'required' : 'nullable';

            if ($type === 'email') {
                $rules[] = 'email';
                $rules[] = 'max:255';
            } elseif ($type === 'tel') {
                $rules[] = 'string';
                $rules[] = 'max:20';
            } elseif ($type === 'select') {
                $options = $field['options'] ?? [];
                $values = [];
                if (is_array($options)) {
                    foreach ($options as $opt) {
                        $val = is_array($opt) ? ($opt['value'] ?? null) : null;
                        if (is_string($val) && $val !== '') $values[] = $val;
                    }
                }

                $isGender = $key === 'gender';
                // Multi-choice fields expect an array. Single-choice expects a scalar string.
                $multiple = (bool)($field['multiple'] ?? true);
                // Gender is handled as an array in the current booking flow (even if it behaves like single-choice).
                if ($isGender) $multiple = true;

                if ($multiple) {
                    $dynamicRules["answers.$escapedKey"] = array_filter([
                        $required ? 'required' : 'nullable',
                        'array',
                        $required ? 'min:1' : null,
                        $isGender ? 'max:1' : null,
                    ]);

                    if (!empty($values)) {
                        $dynamicRules["answers.$escapedKey.*"] = ['string', 'in:' . implode(',', $values)];
                    } else {
                        $dynamicRules["answers.$escapedKey.*"] = ['string'];
                    }
                } else {
                    $dynamicRules["answers.$escapedKey"] = array_filter([
                        $required ? 'required' : 'nullable',
                        'string',
                        $required ? 'min:1' : null,
                    ]);

                    if (!empty($values)) {
                        $dynamicRules["answers.$escapedKey"][] = 'in:' . implode(',', $values);
                    }
                }
                continue;
            } else {
                $rules[] = 'string';
                $rules[] = 'max:255';
            }

            $dynamicRules["answers.$escapedKey"] = $rules;
        }

        $validator = Validator::make(['answers' => $normalizedAnswers], $dynamicRules);

        try {
            $validator->validate();
        } catch (ValidationException $e) {
            if ($asJson) {
                return response()->json([
                    'success' => false,
                    'message' => [
                        'en' => collect($e->errors())->flatten()->first() ?: 'Validation failed.',
                    ],
                    'errors' => $e->errors(),
                ], 422);
            }

            throw $e;
        }

        $adminOverride = $request->boolean('admin_override');

        if (! $adminOverride && $event->capacity <= 0) {
            return response()->json([
                'success' => false,
                'message' => [
                    'en' => 'Sorry, this event is fully booked.',
                ]
            ], 422);
        }

        $answers = $normalizedAnswers;
        $email = $answers[$this->phpInputKey('email')] ?? null;
        if (is_string($email) && $email !== '') {
            $existingBooking = Booking::where('email', $email)
                ->where('event_id', $request->event_id)
                ->first();

            if ($existingBooking) {
                $duplicateMessage = 'This email is already registered for this event.';

                return response()->json([
                    'success' => false,
                    'message' => [
                        'en' => $duplicateMessage,
                        'fr' => 'Cet e-mail est déjà inscrit à cet événement.',
                        'ar' => 'هذا البريد الإلكتروني مسجل بالفعل في هذا الحدث.',
                    ],
                    'errors' => [
                        'answers.email' => [$duplicateMessage],
                    ],
                ], 422);
            }
        }

        $formData = $answers;

        $booking = Booking::create([
            'name'     => $this->firstScalar($answers[$this->phpInputKey('name')] ?? null),
            'email'    => $this->firstScalar($email),
            'phone'    => $this->firstScalar($answers[$this->phpInputKey('phone')] ?? null),
            // Selects submit arrays now; store first selected value in the legacy column.
            'gender'   => $this->firstScalar($answers[$this->phpInputKey('gender')] ?? null),
            'event_id' => $request->event_id,
            'form_data' => $formData,
        ]);

        // Decrement capacity when spots remain; admins may overbook at zero capacity.
        if ($event->capacity > 0) {
            DB::table('events')
                ->where('id', $event->id)
                ->decrement('capacity', 1);
        }

        [$qrBase64, $qrMime] = $this->generateBookingQrImage($booking);

        // Send confirmation email
        if (is_string($booking->email) && $booking->email !== '') {
            try {
                Mail::to($booking->email)->send(new BookingConfirmation($booking, $event, $qrBase64, $qrMime));
            } catch (\Throwable $e) {
                Log::error('Failed to send booking confirmation email: ' . $e->getMessage());
            }
        }

        return $booking;
    }

    /**
     * Generate a QR image suitable for DomPDF (JPEG base64 avoids broken Imagick PNG on Windows).
     *
     * @return array{0: string, 1: string} [base64, mime]
     */
    private function generateBookingQrImage(Booking $booking): array
    {
        $qrPayload = json_encode([
            'email' => $booking->email,
            'code' => $booking->event_id,
        ]);

        $qrTempPath = storage_path('app/qr_booking_' . $booking->id . '_' . time() . '.png');
        QRCode::text($qrPayload)
            ->setOutfile($qrTempPath)
            ->setSize(300)
            ->setMargin(10)
            ->setErrorCorrectionLevel('H')
            ->png();

        $qrBinary = is_file($qrTempPath) ? file_get_contents($qrTempPath) : '';
        if (is_file($qrTempPath)) {
            @unlink($qrTempPath);
        }

        $qrGd = $qrBinary !== '' ? @imagecreatefromstring($qrBinary) : false;
        if ($qrGd !== false) {
            ob_start();
            imagejpeg($qrGd, null, 95);
            imagedestroy($qrGd);
            return [base64_encode(ob_get_clean()), 'image/jpeg'];
        }

        return [base64_encode($qrBinary), 'image/png'];
    }

    /**
     * Verify a booking using the QR code.
     */
    public function verifyBooking($booking_id)
    {
        $booking = Booking::find($booking_id);

        if (!$booking) {
            return response()->json([
                'success' => false,
                'message' => 'Booking not found.'
            ], 404);
        }

        if ($booking->is_visited) {
            return response()->json([
                'success' => false,
                'message' => 'Booking already visited.'
            ], 409); // Conflict
        }

        $booking->is_visited = true;
        $booking->save();

        return response()->json([
            'success' => true,
            'message' => 'Booking verified successfully.',
            'booking' => $booking
        ]);
    }

    /**
     * Delete a booking
     */
    public function destroy(Booking $booking)
    {
        $event = $booking->event;

        // Delete the booking first
        $booking->delete();

        // Then increment event capacity by exactly 1 using database-level update
        if ($event) {
            DB::table('events')
                ->where('id', $event->id)
                ->increment('capacity', 1);
        }

        return back()->with('success', 'Participant deleted successfully.');
    }
}
