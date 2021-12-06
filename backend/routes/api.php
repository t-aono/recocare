<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/ranking', \App\Http\Controllers\Api\RankingProducts::class);
Route::get('/genre', \App\Http\Controllers\Api\GenreController::class);
Route::get('/effect', \App\Http\Controllers\Api\EffectController::class);
