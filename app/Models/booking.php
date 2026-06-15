<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        "name",
        "email",
        "phone",
        "gender",
        "maturite_project",
        "secteur_dactivite",
        "event_id",
        "form_data",
        "is_visited",
    ];

    protected $casts = [
        'form_data' => 'array',
        'is_visited' => 'boolean',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
