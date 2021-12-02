<?php

namespace App\Services;

use App\Models\Genre;
use RakutenRws_Client;

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
            $genre = new Genre;
            $genre->trancateAndInsert($children);
        } else {
            "Errors:" . $response->getMessage();
        }
    }
}