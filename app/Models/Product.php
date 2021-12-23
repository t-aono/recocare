<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_code', 'name', 'caption', 'price', 'genre_id', 'parent_genre_id',
        'item_url', 'afflliate_url', 'afflliate_rate', 'small_image_url', 'medium_image_url'
    ];

    public function itemsStore($items, $parent_genre_id)
    {
        foreach ($items as $value) {
            $item = $value['Item'];
            $record = [];

            // dd($item);

            $record['item_code'] = $item['itemCode'];
            $record['name'] = $item['itemName'];
            $record['caption'] = $item['itemCaption'];
            $record['price'] = $item['itemPrice'];
            $record['genre_id'] = $item['genreId'];
            $record['parent_genre_id'] = $parent_genre_id;
            $record['item_url'] = $item['itemUrl'];
            $record['afflliate_url'] = $item['affiliateUrl'];
            $record['afflliate_rate'] = $item['affiliateRate'];
            $record['small_image_url'] = ($item['smallImageUrls']) ? $item['smallImageUrls'][0]['imageUrl'] : '';
            $record['medium_image_url'] = ($item['mediumImageUrls']) ? $item['mediumImageUrls'][0]['imageUrl'] : '';

            $this->firstOrCreate(['item_code' => $item['itemCode']], $record);
        }
    }

    static public function countProductsByGenre($genres)
    {
        $result = [];

        foreach ($genres as $genre) {
            $result[] = [
                'name' => $genre->name,
                'id' => $genre->genre_id,
                'count' => Product::where('parent_genre_id', $genre->genre_id)->count()
            ];
        }

        return $result;
    }
}
