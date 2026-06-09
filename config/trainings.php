<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Training programs catalog (displayed on /trainings)
    | formation + format must match info_sessions columns for enrollment status.
    |--------------------------------------------------------------------------
    */
    'programs' => [
        [
            'slug' => 'coding-long',
            'formation' => 'Coding',
            'format' => 'long',
            'apply_type' => 'coding',
            'image_class' => 'bg-image-coding',
            'layout' => 'normal',
        ],
        [
            'slug' => 'media-long',
            'formation' => 'Media',
            'format' => 'long',
            'apply_type' => 'media',
            'image_class' => 'bg-image-media',
            'layout' => 'reverse',
        ],
        [
            'slug' => 'coding-short',
            'formation' => 'Coding',
            'format' => 'short',
            'apply_type' => 'coding',
            'image_class' => 'bg-image-coding-short',
            'layout' => 'normal',
        ],
        [
            'slug' => 'media-short',
            'formation' => 'Media',
            'format' => 'short',
            'apply_type' => 'media',
            'image_class' => 'bg-image-media-short',
            'layout' => 'reverse',
        ],
    ],
];
