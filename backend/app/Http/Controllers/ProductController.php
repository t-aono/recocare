<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index() {
        return view('product.index');
    }

    public function update() {
        
        $rakuten_api_url = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222?format=json&applicationId=ff23cf2aa78087c10652121c85c9b165';
        // $url = 'https://jsonplaceholder.typicode.com/posts';

        $params = ['genreId' => 0];

        $client = new \GuzzleHttp\Client();
        $response = $client->request(
            'GET',
            $rakuten_api_url,
            ['query' => $params]
        );
        dd($response->getBody()->getContents());

    }
}
