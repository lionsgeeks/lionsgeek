<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            // Education & Background
            if (!Schema::hasColumn('participants', 'education_level')) {
                $table->string('education_level')->nullable()->after('code');
            }
            if (!Schema::hasColumn('participants', 'diploma_institution')) {
                $table->string('diploma_institution')->nullable()->after('education_level');
            }
            if (!Schema::hasColumn('participants', 'diploma_specialty')) {
                $table->string('diploma_specialty')->nullable()->after('diploma_institution');
            }
            if (!Schema::hasColumn('participants', 'current_situation')) {
                $table->string('current_situation')->nullable()->after('diploma_specialty');
            }
            if (!Schema::hasColumn('participants', 'other_status')) {
                $table->string('other_status')->nullable()->after('current_situation');
            }

            // Organization & Training
            if (!Schema::hasColumn('participants', 'has_referring_organization')) {
                $table->string('has_referring_organization')->nullable()->after('other_status');
            }
            if (!Schema::hasColumn('participants', 'referring_organization')) {
                $table->string('referring_organization')->nullable()->after('has_referring_organization');
            }
            if (!Schema::hasColumn('participants', 'other_organization')) {
                $table->string('other_organization')->nullable()->after('referring_organization');
            }
            if (!Schema::hasColumn('participants', 'has_training')) {
                $table->string('has_training')->nullable()->after('other_organization');
            }
            if (!Schema::hasColumn('participants', 'previous_training_details')) {
                $table->text('previous_training_details')->nullable()->after('has_training');
            }

            // Motivation & Goals
            if (!Schema::hasColumn('participants', 'why_join_formation')) {
                $table->text('why_join_formation')->nullable()->after('previous_training_details');
            }
            if (!Schema::hasColumn('participants', 'participated_lionsgeek')) {
                $table->string('participated_lionsgeek')->nullable()->after('why_join_formation');
            }
            if (!Schema::hasColumn('participants', 'lionsgeek_activity')) {
                $table->string('lionsgeek_activity')->nullable()->after('participated_lionsgeek');
            }
            if (!Schema::hasColumn('participants', 'other_activity')) {
                $table->string('other_activity')->nullable()->after('lionsgeek_activity');
            }
            if (!Schema::hasColumn('participants', 'objectives_after_formation')) {
                $table->string('objectives_after_formation')->nullable()->after('other_activity');
            }
            if (!Schema::hasColumn('participants', 'priority_learning_topics')) {
                $table->string('priority_learning_topics')->nullable()->after('objectives_after_formation');
            }
            if (!Schema::hasColumn('participants', 'last_self_learned')) {
                $table->text('last_self_learned')->nullable()->after('priority_learning_topics');
            }

            // Language Skills
            if (!Schema::hasColumn('participants', 'arabic_level')) {
                $table->string('arabic_level')->nullable()->after('last_self_learned');
            }
            if (!Schema::hasColumn('participants', 'french_level')) {
                $table->string('french_level')->nullable()->after('arabic_level');
            }
            if (!Schema::hasColumn('participants', 'english_level')) {
                $table->string('english_level')->nullable()->after('french_level');
            }

            // Additional Information
            if (!Schema::hasColumn('participants', 'how_heard_about_formation')) {
                $table->string('how_heard_about_formation')->nullable()->after('english_level');
            }
            if (!Schema::hasColumn('participants', 'current_commitments')) {
                $table->string('current_commitments')->nullable()->after('how_heard_about_formation');
            }
            if (!Schema::hasColumn('participants', 'cv_file')) {
                $table->string('cv_file')->nullable()->after('current_commitments');
            }

            // Game Metrics
            if (!Schema::hasColumn('participants', 'game_completed')) {
                $table->boolean('game_completed')->default(false)->after('cv_file');
            }
            if (!Schema::hasColumn('participants', 'final_score')) {
                $table->integer('final_score')->nullable()->after('game_completed');
            }
            if (!Schema::hasColumn('participants', 'correct_answers')) {
                $table->integer('correct_answers')->nullable()->after('final_score');
            }
            if (!Schema::hasColumn('participants', 'levels_completed')) {
                $table->integer('levels_completed')->nullable()->after('correct_answers');
            }
            if (!Schema::hasColumn('participants', 'total_attempts')) {
                $table->integer('total_attempts')->nullable()->after('levels_completed');
            }
            if (!Schema::hasColumn('participants', 'wrong_attempts')) {
                $table->integer('wrong_attempts')->nullable()->after('total_attempts');
            }
            if (!Schema::hasColumn('participants', 'time_spent')) {
                $table->integer('time_spent')->nullable()->after('wrong_attempts');
            }
            if (!Schema::hasColumn('participants', 'time_spent_formatted')) {
                $table->string('time_spent_formatted')->nullable()->after('time_spent');
            }
        });
    }

    public function down(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            $columns = [
                'education_level', 'diploma_institution', 'diploma_specialty',
                'current_situation', 'other_status',
                'has_referring_organization', 'referring_organization', 'other_organization',
                'has_training', 'previous_training_details',
                'why_join_formation', 'participated_lionsgeek', 'lionsgeek_activity',
                'other_activity', 'objectives_after_formation', 'priority_learning_topics',
                'last_self_learned',
                'arabic_level', 'french_level', 'english_level',
                'how_heard_about_formation', 'current_commitments', 'cv_file',
                'game_completed', 'final_score', 'correct_answers', 'levels_completed',
                'total_attempts', 'wrong_attempts', 'time_spent', 'time_spent_formatted',
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('participants', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
