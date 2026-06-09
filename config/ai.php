<?php

return [

    'api_key' => env('AI_API_KEY'),

    'model' => env('AI_MODEL', 'llama-3.1-8b-instant'),

    'base_url' => env('AI_BASE_URL', 'https://api.groq.com/openai/v1/chat/completions'),

];
