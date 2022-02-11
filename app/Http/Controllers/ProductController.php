<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RakutenGenreService;
use App\Services\RakutenItemService;
use App\Models\Genre;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $genres = Genre::orderBy('id')->get();
        $result = Product::countProductsByGenre($genres);

        return view('product.index', compact('genres', 'result'));
    }

    public function update(Request $request)
    {
         if (!config('app.rakuten_id')) {
            throw new Exception('rakuten_id not found!');
            exit;
        }
        if (!config('app.affiliate_id')) {
            throw new Exception('affiliate_id not found!');
            exit;
        }
        
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
