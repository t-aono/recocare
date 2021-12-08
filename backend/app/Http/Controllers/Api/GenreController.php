<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Genre;

class GenreController extends Controller
{

    public function __invoke()
    {
        return response()->json(Genre::where('is_use', 1)->get()->toArray());
    }
}
