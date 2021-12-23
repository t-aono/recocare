<?php

namespace App\Services;

use App\Models\Product;
use App\Models\Genre;
use RakutenRws_Client;

class RakutenItemService
{
    public function updateProducts($genre_id_list)
    {
        $client = new RakutenRws_Client;
        $client->setApplicationId(config('app.rakuten_id'));

        $product = new Product;
        $genre = new Genre;

        foreach ($genre_id_list as $genre_id) {
            $genre->setUseGenre($genre_id);
            $page = 1;
            $last = 1;
            while ($page <= $last) {
                $response = $client->execute('IchibaItemSearch', array(
                    'affiliateId' => config('app.affiliate_id'),
                    'keyword' => '有効成分',
                    'genreId' => $genre_id,
                    'page' => $page,
                    'sort' => '+reviewCount',
                ));
                $page++;

                if ($response->isOk()) {
                    $last = $response['pageCount'];
                    $product->itemsStore($response['Items'], $genre_id);
                } else {
                    $last = 1;
                    echo "Errors:" . $response->getMessage();
                }

                sleep(1);
            }
        }
    }
}
