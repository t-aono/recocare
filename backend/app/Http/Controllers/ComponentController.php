<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Component;
use App\Models\Effect;

class ComponentController extends Controller
{
    public function index()
    {
        $componet = new Component;
        $components = $componet->getComponentEffectList();
        $effects = Effect::all()->toArray();

        return view('component.index', compact('components', 'effects'));
    }

    public function store(Request $request)
    {
        $request->validate(['csv' => 'required']);

        if ($request->file('csv')->getMimeType() !== "application/csv") {
            return redirect()->route("component.index")->withErrors('file type missmatch.');
        }

        $componet = new Component;
        $componet->trancateRelationTable();

        $file_path = $request->file('csv')->path();
        $file = new \SplFileObject($file_path);
        $file->setFlags(\SplFileObject::READ_CSV);

        foreach ($file as $index => $line) {
            if ($index === 0) continue;
            $componet->saveComponentEffect($line);
        }

        return redirect()->route('component.index');
    }

    public function update(Request $request)
    {
        $effect = Effect::find($request['effect']);
        Effect::where('id', $request['effect'])->update([
            'is_use' => ($effect->is_use == 1) ? 0 : 1
        ]);

        return redirect()->route('component.index');
    }
}
