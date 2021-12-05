<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Component;

class Effect extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function components()
    {
        return $this->belongsToMany(Component::class);
    }

    public function getComponentNames($id)
    {
        $components = $this->find($id)->components->toArray();

        return array_map(function ($component) {
            return $component['name'];
        }, $components);
    }
}
