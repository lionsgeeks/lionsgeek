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
        Schema::create('chatbot_conversations', function (Blueprint $table) {
            $table->id();
            $table->string('session_id')->unique()->index(); // Unique identifier for localStorage session
            $table->json('messages'); // Store all messages in the conversation
            $table->string('user_ip')->nullable();
            $table->text('user_agent')->nullable();
            $table->integer('message_count')->default(0);
            $table->timestamp('started_at')->nullable();
            $table->timestamp('last_message_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chatbot_conversations');
    }
};
