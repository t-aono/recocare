<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Effect;
use Illuminate\Support\Facades\Validator;

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
        $validator = Validator::make($request->all(), [
            'genre' => 'required',
            'effects' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => 'parameter incorrect.']);
        }

        $genre_id = $request->input('genre');
        $effects = $request->input('effects');
        $price = $request->input('price');
        $effect = new Effect;

        if ($price === '10001') {
            $products = Product::where('parent_genre_id', $genre_id)->where('price', '>=', $price)->get();
        } elseif ($price) {
            $products = Product::where('parent_genre_id', $genre_id)->where('price', '<', $price)->get();
        } else {
            $products = Product::where('parent_genre_id', $genre_id)->get();
        }
        $result = [];
        foreach ($products as $product) {
            $point = 0;
            preg_match("/有効成分.+/", $product->caption, $effctive);
            if (!$effctive) {
                preg_match("/成分.+/", $product->caption, $ingredient);
            }
            if ($effctive) {
                foreach ($effects as $effect_id) {
                    $components = $effect->getComponentNames($effect_id);
                    foreach ($components as $component) {
                        if (strpos($effctive[0], $component) !== false) $point++;
                    }
                }
            }
            $result[] = array_merge($product->toArray(), ['point' => $point]);
        }

        usort($result, function ($a, $b) {
            return $b['point'] - $a['point'];
        });

        return response()->json(['data' => $result]);
    }
}
