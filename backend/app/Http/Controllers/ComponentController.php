<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Component;
use Illuminate\Support\Facades\DB;

class ComponentController extends Controller
{
    public function index()
    {
        $componet = new Component;
        $list = $componet->getComponentEffectList();

        return view('component.index', compact('list'));
    }

    public function store(Request $request) 
    {
        $request->validate(['csv' => 'required']);

        if ($request->file('csv')->getMimeType() !== "application/csv") {
            return redirect()->route("component.index")->withErrors('file type missmatch.');
        }

        // テーブルを初期化
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('component_effect')->truncate();
        DB::table('components')->truncate();
        DB::table('effects')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $file_path = $request->file('csv')->path();
        $file = new \SplFileObject($file_path);
        $file->setFlags(\SplFileObject::READ_CSV);
        $effects = [];
        foreach($file as $index => $line) {
            if ($index === 0) continue;

            $componet = new Component;
            $componet->name = $line[0];
            $componet->save();

            for ($i = 1; $i < count($line); $i++) {
                if ($line[$i] && !in_array($line[$i], $effects, true)) {
                    $effects[] = $line[$i];
                    DB::table('effects')->insert([
                        'name' => $line[$i]
                    ]);
                }
                
                if ($line[$i]) {
                    $effect_id = array_search($line[$i], $effects, true) + 1;
                    DB::table('component_effect')->insert([
                        'component_id' => $componet->id,
                        'effect_id' => $effect_id
                    ]);
                }
            }            
        }

        $componet = new Component;
        $list = $componet->getComponentEffectList();

        return redirect(route('component.index', compact('list')));
    }
}
