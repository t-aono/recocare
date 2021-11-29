<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComponentEffectTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('component_effect', function (Blueprint $table) {
            $table->unsignedBigInteger('component_id');
            $table->unsignedBigInteger('effect_id');

            $table->foreign('component_id')->references('id')->on('components');
            $table->foreign('effect_id')->references('id')->on('effects');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('component_effect');
    }
}
