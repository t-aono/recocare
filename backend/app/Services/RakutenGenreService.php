<?php

namespace App\Services;

use RakutenRws_Client;
use Illuminate\Support\Facades\DB;

class RakutenGenreService
{
    public function updateCosmeGenreChildren($genre_id)
    {
        $client = new RakutenRws_Client;
        $client->setApplicationId(config('app.rakuten_id'));
        $response = $client->execute('IchibaGenreSearch', array(
            'genreId' => $genre_id
        ));
        if ($response->isOk()) {
            $children = [];
            foreach($response['children'] as $value) {
                $child = $value['child'];
                $children[] = ['genre_id' => $child['genreId'], 'genre_name' => $child['genreName']];
            }
            DB::table('genres')->truncate();
            DB::table('genres')->insert($children);
        } else {
            "Errors:" . $response->getMessage();
        }
    }
}