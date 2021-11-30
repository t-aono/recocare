<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\Product;
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
            $rakutenGenre->updateCosmeGenreChildren(100939);  // "美容・コスメ・香水" の子ジャンル
        }

        if ($request->input('product')) {
            $request->validate(['genre_id' => 'required']);
            $rakutenItem = new RakutenItemService;
            $rakutenItem->updateProducts($request->input('genre_id'));
        }

        if ($request->input('show')) {
            $request->validate(['genre_id' => 'required']);
            $products = Product::all();
            $genres = Genre::all();
            return view('product.index', compact('products', 'genres'));
        }

        return redirect()->route('product.index');
    }

}
