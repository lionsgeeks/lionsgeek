<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            // Participants no longer require a session at registration time.
            // They choose a session from the approval email after admin review.
            $table->foreignId('info_session_id')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            $table->foreignId('info_session_id')->nullable(false)->change();
        });
    }
};
