<?php

use App\Http\Controllers\ChatbotController;
use Illuminate\Support\Facades\Route;

Route::post('/chatbot', [ChatbotController::class, 'handleMessage'])->name('chatbot.message');

