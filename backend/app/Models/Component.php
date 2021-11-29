<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Effect;

class Component extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function effects() {
        return $this->belongsToMany(Effect::class);
    }

    public function getComponentEffectList() {
        $list = [];
        foreach($this->all() as $component) {
            $component_name = $component->name;
            $effects = $component->effects()->get()->toArray();
            $effect_names =[];
            foreach($effects as $effect) {
                $effect_names[] = $effect['name'];
            }
            $list[] = [
                'component' => $component_name,
                'effects' => $effect_names
            ];
        }
        return $list;
    }
}
