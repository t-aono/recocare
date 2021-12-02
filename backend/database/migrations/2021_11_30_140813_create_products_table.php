<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('item_code')->unique();
            $table->string('name');
            $table->text('caption');
            $table->integer('price');
            $table->integer('genre_id');
            $table->integer('parent_genre_id');
            $table->string('rakuten_url');
            $table->string('image_url');
            $table->timestamps();

            $table->foreign('parent_genre_id')->references('genre_id')->on('genres');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
