<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\Effect;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function effects()
    {
        return $this->belongsToMany(Effect::class, 'ingredient_effect');
    }

    public function getIngredientEffectList()
    {
        $list = [];
        foreach ($this->all() as $ingredient) {
            $ingredient_name = $ingredient->name;
            $effects = $ingredient->effects()->get()->toArray();
            $effect_names = [];
            foreach ($effects as $effect) {
                $effect_names[] = $effect['name'];
            }
            $list[] = [
                'ingredient' => $ingredient_name,
                'effects' => $effect_names
            ];
        }
        return $list;
    }

    public function trancateRelationTable()
    {
        DB::statement('SET CONSTRAINTS ALL DEFERRED;');
        DB::table('ingredient_effect')->truncate();
        DB::table('ingredients')->truncate();
        DB::table('effects')->truncate();
        DB::statement('SET CONSTRAINTS ALL IMMEDIATE;');
    }

    public function saveIngredientEffect($line)
    {
        $ingredient = $this->create(['name' => $line[0]]);

        $effect = new Effect;
        for ($i = 1; $i < count($line); $i++) {
            if ($line[$i]) {
                $effect->firstOrCreate(['name' => $line[$i]], ['name' => $line[$i]]);

                $effect_model = $effect->where('name', $line[$i])->first();
                DB::table('ingredient_effect')->insert([
                    'ingredient_id' => $ingredient->id,
                    'effect_id' => $effect_model->id
                ]);
            }
        }
    }
}
