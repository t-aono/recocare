<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Effect;
use Illuminate\Support\Facades\DB;

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

    public function trancateRelationTable() {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('component_effect')->truncate();
        DB::table('components')->truncate();
        DB::table('effects')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }

    public function saveComponentEffect($line) {
        $component = $this->create(['name' => $line[0]]);

        $effect = new Effect;
        for ($i = 1; $i < count($line); $i++) {
            if ($line[$i]) {
                $effect->firstOrCreate(['name' => $line[$i]], ['name' => $line[$i]]);

                $effect_model = $effect->where('name', $line[$i])->first();
                DB::table('component_effect')->insert([
                    'component_id' => $component->id,
                    'effect_id' => $effect_model->id
                ]);
            }
        }
    }
}
