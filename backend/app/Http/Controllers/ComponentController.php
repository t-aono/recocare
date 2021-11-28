<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ComponentController extends Controller
{
    public function index()
    {
        return view('component.index');
    }

    public function store(Request $request) 
    {
        $request->validate(['csv' => 'required']);

        if ($request->file('csv')->getMimeType() !== "application/csv") {
            return redirect()->route("component.index")->withErrors('file type missmatch.');
        }

        $file_path = $request->file('csv')->path();
        $file = new \SplFileObject($file_path);
        $file->setFlags(\SplFileObject::READ_CSV);
        foreach($file as $line) {
            $data[] = [
                'component' => $line[0]
            ];
        }    
        dd($data);

    }
}
