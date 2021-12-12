<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ingredient;
use App\Models\Effect;

class IngredientController extends Controller
{
    public function index()
    {
        $ingredient = new Ingredient();
        $ingredients = $ingredient->getIngredientEffectList();
        $effects = Effect::all()->toArray();

        return view('ingredient.index', compact('ingredients', 'effects'));
    }

    public function store(Request $request)
    {
        $request->validate(['csv' => 'required']);

        if ($request->file('csv')->getMimeType() !== "application/csv") {
            return redirect()->route("ingredient.index")->withErrors('file type missmatch.');
        }

        $ingredient = new Ingredient();
        $ingredient->trancateRelationTable();

        $file_path = $request->file('csv')->path();
        $file = new \SplFileObject($file_path);
        $file->setFlags(\SplFileObject::READ_CSV);

        foreach ($file as $index => $line) {
            if ($index === 0) continue;
            $ingredient->saveIngredientEffect($line);
        }

        return redirect()->route('ingredient.index');
    }

    public function update(Request $request)
    {
        $effect = Effect::find($request['effect']);
        Effect::where('id', $request['effect'])->update([
            'is_use' => ($effect->is_use == 1) ? 0 : 1
        ]);

        return redirect()->route('ingredient.index');
    }
}
