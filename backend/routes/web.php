<?php

use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/manage', function () {
    return view('manage.index');
});

Route::group(['middleware' => 'auth'], function () {

    Route::name('ingredient.')->group(function () {
        Route::get('/ingredient', [IngredientController::class, 'index'])->name('index');
        Route::post('/ingredient/store', [IngredientController::class, 'store'])->name('store');
        Route::post('/ingredient/update', [IngredientController::class, 'update'])->name('update');
    });

    Route::name('product.')->group(function () {
        Route::get('/product', [ProductController::class, 'index'])->name('index');
        Route::post('/product/update', [ProductController::class, 'update'])->name('update');
    });
});

require __DIR__ . '/auth.php';
