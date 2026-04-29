<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmation;
use App\Models\Booking;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
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
        $request->validate([
            'event_id' => 'required|exists:events,id',
            'answers' => 'nullable|array',
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
        $validator->validate();

        if ($event->capacity <= 0) {
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
                return response()->json([
                    'success' => false,
                    'message' => [
                        'en' => 'You have already booked this event.',
                    ]
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

        // Decrement capacity by exactly 1 using database-level update to avoid race conditions
        DB::table('events')
            ->where('id', $event->id)
            ->decrement('capacity', 1);

        // Generate QR code
        $qrPayload = json_encode([
            "email" => $booking->email,
            "code" => $booking->event_id
        ]);

        // Generate QR code image as base64
        ob_start();
        QRCode::text($qrPayload)
            ->setSize(300)
            ->setMargin(10)
            ->setErrorCorrectionLevel('H')
            ->png();
        $qrImage = ob_get_clean();
        $qrBase64 = base64_encode($qrImage);

        // Send confirmation email
        if (is_string($booking->email) && $booking->email !== '') {
            try {
                Mail::to($booking->email)->send(new BookingConfirmation($booking, $event, $qrBase64));
            } catch (\Exception $e) {
                Log::error('Failed to send booking confirmation email: ' . $e->getMessage());
            }
        }

        return back()->with('success', 'Booking successful!');
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
