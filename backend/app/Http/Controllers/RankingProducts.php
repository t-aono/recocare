<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Effect;

class RankingProducts extends Controller
{
    /**
     * ジャンルと効果と成分データをもとに商品をランキングする
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $request->validate(['genre' => 'required']);
        $request->validate(['effect' => 'required']);
        $genre_id = $request->input('genre');
        $effect_id = $request->input('effect');

        $components = Effect::find($effect_id)->components;
        dd($components->toArray());

        $products = Product::where('parent_genre_id', $genre_id)->get();
        $effctives = [];

        foreach ($products as $product) {
            preg_match("/有効成分.+/", $product->caption, $effctive);
            $effctives[] = $effctive;
            if (!$effctive) {
                preg_match("/成分.+/", $product->caption, $ingredient);
                $effctives[] = $ingredient;
            }
        }

        return response()->json([
            'genre_id' => $genre_id,
            'effect' => $effect,
            'products' => $products,
            'effctives' => $effctives,
        ]);
    }
}
