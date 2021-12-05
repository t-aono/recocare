<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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

        $effect = new Effect;
        $components = $effect->getComponentNames($effect_id);

        $products = Product::where('parent_genre_id', $genre_id)->get();
        $result = [];
        foreach ($products as $product) {
            $point = 0;
            preg_match("/有効成分.+/", $product->caption, $effctive);
            if (!$effctive) {
                preg_match("/成分.+/", $product->caption, $ingredient);
            }
            if ($effctive) {
                foreach ($components as $component) {
                    if (strpos($effctive[0], $component) !== false) $point++;
                }
            }
            $result[] = array_merge($product->toArray(), ['point' => $point]);
        }
        usort($result, function ($a, $b) {
            return $b['point'] - $a['point'];
        });

        // dd($result);
        return response()->json($result);
    }
}
