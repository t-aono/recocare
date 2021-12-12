<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ingredient;

class Effect extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'ingredient_effect');
    }

    public function getIngredientNames($id)
    {
        $ingredients = $this->find($id)->ingredients->toArray();

        return array_map(function ($ingredient) {
            return $ingredient['name'];
        }, $ingredients);
    }
}
