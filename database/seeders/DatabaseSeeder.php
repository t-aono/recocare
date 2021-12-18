<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(EffectsTableSeeder::class);
        $this->call(IngredientsTableSeeder::class);
        $this->call(IngredientEffectTableSeeder::class);
        $this->call(GenresTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
    }
}
