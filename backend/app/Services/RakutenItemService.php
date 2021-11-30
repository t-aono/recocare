<?php

namespace App\Services;

use RakutenRws_Client;
use Illuminate\Support\Facades\DB;

class RakutenItemService
{
    public function updateProducts($genre_id)
    {
        $client = new RakutenRws_Client;

        $client->setApplicationId(config('app.rakuten_id'));

        $response = $client->execute('IchibaItemSearch', array(
            'genreId' => $genre_id,
        ));

        if ($response->isOk()) {
            $records = [];
            foreach ($response['Items'] as $value) {
                $item = $value['Item'];
                $record['name'] = $item['itemName'];
                $record['caption'] = $item['itemCaption'];
                $record['price'] = $item['itemPrice'];
                $record['genre_id'] = $item['genreId'];
                $record['rakuten_url'] = $item['itemUrl'];
                $record['image_url'] = $item['smallImageUrls'][0]['imageUrl'];
                $records[] = $record;
            }
            DB::table('products')->insert($records);
        } else {
            echo "Errors:" . $response->getMessage();
        }
    }
}
