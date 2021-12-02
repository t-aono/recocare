<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use App\Services\RakutenGenreService;
use App\Services\RakutenItemService;

class ProductController extends Controller
{
    public function index() {
        $genres = Genre::all();
        return view('product.index', compact('genres'));
    }

    public function update(Request $request) {
        
        if ($request->input('genre')) {
            $rakutenGenre = new RakutenGenreService;
            $rakutenGenre->updateCosmeGenreChildren(100944);  // スキンケア
        }

        if ($request->input('item')) {
            $request->validate(['genre_id' => 'required']);
            $rakutenItem = new RakutenItemService;
            $rakutenItem->updateProducts($request->input('genre_id'));
        }

        return redirect()->route('product.index');
    }

}
