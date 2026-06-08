<?php

namespace Tests\Feature;

use App\Mail\RegistrationReceived;
use App\Models\InfoSession;
use App\Models\Participant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class ChildrenRegistrationTest extends TestCase
{
    use RefreshDatabase;

    private function childrenSchema(): array
    {
        return [
            [
                'key' => 'child_name',
                'type' => 'text',
                'required' => true,
                'group' => 'child',
                'label' => ['en' => 'Child name', 'fr' => 'Nom', 'ar' => 'الاسم'],
            ],
            [
                'key' => 'guardian_email',
                'type' => 'email',
                'required' => true,
                'group' => 'guardian',
                'label' => ['en' => 'Email', 'fr' => 'Email', 'ar' => 'البريد'],
            ],
            [
                'key' => 'child_level',
                'type' => 'select',
                'required' => true,
                'group' => 'child',
                'label' => ['en' => 'Level', 'fr' => 'Niveau', 'ar' => 'المستوى'],
                'options' => [
                    [
                        'value' => 'beginner',
                        'label' => ['en' => 'Beginner', 'fr' => 'Débutant', 'ar' => 'مبتدئ'],
                    ],
                ],
            ],
        ];
    }

    private function createChildrenSession(): InfoSession
    {
        return InfoSession::factory()->create([
            'formation' => 'Media',
            'format' => 'short',
            'audience' => 'children_12_17',
            'isAvailable' => true,
            'is_private' => false,
            'isFinish' => false,
            'isFull' => false,
            'registration_form_children' => $this->childrenSchema(),
        ]);
    }

    public function test_participants_table_has_children_registration_columns(): void
    {
        $this->assertTrue(Schema::hasColumn('participants', 'formation_field'));
        $this->assertTrue(Schema::hasColumn('participants', 'children_form_data'));
        $this->assertTrue(Schema::hasColumn('participants', 'status'));
    }

    public function test_children_registration_stores_participant_with_dynamic_answers(): void
    {
        Mail::fake();

        $session = $this->createChildrenSession();

        $response = $this->post(route('participants.store', ['type' => 'media']), [
            'format' => 'short',
            'is_children' => true,
            'formation_field' => 'media',
            'info_session_id' => $session->id,
            'children_answers' => [
                'child_name' => 'Ali Ben',
                'guardian_email' => 'parent@example.com',
                'child_level' => 'beginner',
            ],
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertSessionHasNoErrors();

        $participant = Participant::latest('id')->first();

        $this->assertNotNull($participant);
        $this->assertSame('parent@example.com', $participant->email);
        $this->assertSame('Ali Ben', $participant->full_name);
        $this->assertSame('media', $participant->formation_field);
        $this->assertSame('children_form', $participant->source);
        $this->assertSame('beginner', $participant->children_form_data['child_level']);

        Mail::assertSent(RegistrationReceived::class, function (RegistrationReceived $mail) use ($participant) {
            return $mail->hasTo($participant->email);
        });
    }

    public function test_children_validation_returns_generic_error_without_sql_details(): void
    {
        $session = $this->createChildrenSession();

        $response = $this->post(route('participants.store', ['type' => 'media']), [
            'format' => 'short',
            'is_children' => true,
            'formation_field' => 'media',
            'info_session_id' => $session->id,
            'children_answers' => [
                'child_name' => '',
                'guardian_email' => '',
            ],
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertSessionHasErrors(['child_name', 'guardian_email', 'child_level']);
        $content = json_encode(session('errors'));
        $this->assertStringNotContainsString('SQLSTATE', $content);
        $this->assertStringNotContainsString('children_answers.', $content);
    }
}
