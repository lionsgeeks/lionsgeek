<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('info_sessions', function (Blueprint $table) {
            // Audience type for the session: normal vs children 12–17
            $table->string('audience')->default('normal')->after('formation');
            // Optional JSON schema for children registration form
            $table->json('registration_form_children')->nullable()->after('audience');
        });

        Schema::table('participants', function (Blueprint $table) {
            // Stores answers for children-specific dynamic fields
            $table->json('children_form_data')->nullable()->after('cv_file');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('info_sessions', function (Blueprint $table) {
            if (Schema::hasColumn('info_sessions', 'registration_form_children')) {
                $table->dropColumn('registration_form_children');
            }
            if (Schema::hasColumn('info_sessions', 'audience')) {
                $table->dropColumn('audience');
            }
        });

        Schema::table('participants', function (Blueprint $table) {
            if (Schema::hasColumn('participants', 'children_form_data')) {
                $table->dropColumn('children_form_data');
            }
        });
    }
};

