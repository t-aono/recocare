<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Component;

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
        
        $componet = new Component;
        $componet->trancateRelationTable();

        $file_path = $request->file('csv')->path();
        $file = new \SplFileObject($file_path);
        $file->setFlags(\SplFileObject::READ_CSV);
        
        foreach($file as $index => $line) {
            if ($index === 0) continue;
            $componet->saveComponentEffect($line);
        }

        return redirect()->route('component.index');
    }
}
