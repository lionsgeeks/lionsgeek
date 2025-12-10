<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatbotConversation extends Model
{
    protected $fillable = [
        'session_id',
        'messages',
        'user_ip',
        'user_agent',
        'message_count',
        'started_at',
        'last_message_at',
    ];

    protected $casts = [
        'messages' => 'array',
        'started_at' => 'datetime',
        'last_message_at' => 'datetime',
    ];
}
