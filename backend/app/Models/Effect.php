<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Component;

class Effect extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function componens() {
        return $this->belongsToMany(Component::class);
    }
}
