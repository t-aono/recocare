<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_code', 'name', 'caption', 'price', 'genre_id', 'parent_genre_id', 'rakuten_url', 'image_url'
    ];

    public function itemsStore($items, $parent_genre_id) {
        
        foreach ($items as $value) {
            $item = $value['Item'];
            $record = [];
            $record['item_code'] = $item['itemCode'];
            $record['name'] = $item['itemName'];
            $record['caption'] = $item['itemCaption'];
            $record['price'] = $item['itemPrice'];
            $record['genre_id'] = $item['genreId'];
            $record['parent_genre_id'] = $parent_genre_id;
            $record['rakuten_url'] = $item['itemUrl'];
            $record['image_url'] = ($item['smallImageUrls']) ? $item['smallImageUrls'][0]['imageUrl'] : '';
            
            $this->firstOrCreate(['item_code' => $item['itemCode']], $record);
        }

    }

}
