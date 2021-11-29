<?php

use App\Http\Controllers\ComponentController;
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
    return view('welcome');
});

Route::name('component.')->group(function () {
    Route::get('/component', [ComponentController::class, 'index'])->name('index');
    Route::post('/component/store', [ComponentController::class, 'store'])->name('store');
});
