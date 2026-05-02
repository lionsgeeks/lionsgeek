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
    ];

    protected $casts = [
        'form_data' => 'array',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
