<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class IngredientEffectTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('ingredient_effect')->delete();
        
        \DB::table('ingredient_effect')->insert(array (
            0 => 
            array (
                'ingredient_id' => 1,
                'effect_id' => 1,
            ),
            1 => 
            array (
                'ingredient_id' => 2,
                'effect_id' => 2,
            ),
            2 => 
            array (
                'ingredient_id' => 2,
                'effect_id' => 3,
            ),
            3 => 
            array (
                'ingredient_id' => 2,
                'effect_id' => 4,
            ),
            4 => 
            array (
                'ingredient_id' => 2,
                'effect_id' => 5,
            ),
            5 => 
            array (
                'ingredient_id' => 4,
                'effect_id' => 1,
            ),
            6 => 
            array (
                'ingredient_id' => 6,
                'effect_id' => 6,
            ),
            7 => 
            array (
                'ingredient_id' => 7,
                'effect_id' => 7,
            ),
            8 => 
            array (
                'ingredient_id' => 7,
                'effect_id' => 8,
            ),
            9 => 
            array (
                'ingredient_id' => 7,
                'effect_id' => 3,
            ),
            10 => 
            array (
                'ingredient_id' => 8,
                'effect_id' => 1,
            ),
            11 => 
            array (
                'ingredient_id' => 9,
                'effect_id' => 7,
            ),
            12 => 
            array (
                'ingredient_id' => 9,
                'effect_id' => 1,
            ),
            13 => 
            array (
                'ingredient_id' => 9,
                'effect_id' => 4,
            ),
            14 => 
            array (
                'ingredient_id' => 9,
                'effect_id' => 5,
            ),
            15 => 
            array (
                'ingredient_id' => 10,
                'effect_id' => 3,
            ),
            16 => 
            array (
                'ingredient_id' => 11,
                'effect_id' => 6,
            ),
            17 => 
            array (
                'ingredient_id' => 12,
                'effect_id' => 7,
            ),
            18 => 
            array (
                'ingredient_id' => 12,
                'effect_id' => 3,
            ),
            19 => 
            array (
                'ingredient_id' => 13,
                'effect_id' => 4,
            ),
            20 => 
            array (
                'ingredient_id' => 14,
                'effect_id' => 1,
            ),
            21 => 
            array (
                'ingredient_id' => 15,
                'effect_id' => 3,
            ),
            22 => 
            array (
                'ingredient_id' => 16,
                'effect_id' => 3,
            ),
            23 => 
            array (
                'ingredient_id' => 17,
                'effect_id' => 3,
            ),
            24 => 
            array (
                'ingredient_id' => 18,
                'effect_id' => 9,
            ),
            25 => 
            array (
                'ingredient_id' => 18,
                'effect_id' => 1,
            ),
            26 => 
            array (
                'ingredient_id' => 19,
                'effect_id' => 1,
            ),
            27 => 
            array (
                'ingredient_id' => 20,
                'effect_id' => 7,
            ),
            28 => 
            array (
                'ingredient_id' => 20,
                'effect_id' => 3,
            ),
            29 => 
            array (
                'ingredient_id' => 20,
                'effect_id' => 9,
            ),
            30 => 
            array (
                'ingredient_id' => 22,
                'effect_id' => 7,
            ),
            31 => 
            array (
                'ingredient_id' => 22,
                'effect_id' => 4,
            ),
            32 => 
            array (
                'ingredient_id' => 22,
                'effect_id' => 5,
            ),
            33 => 
            array (
                'ingredient_id' => 23,
                'effect_id' => 9,
            ),
            34 => 
            array (
                'ingredient_id' => 23,
                'effect_id' => 1,
            ),
            35 => 
            array (
                'ingredient_id' => 24,
                'effect_id' => 3,
            ),
            36 => 
            array (
                'ingredient_id' => 25,
                'effect_id' => 8,
            ),
            37 => 
            array (
                'ingredient_id' => 27,
                'effect_id' => 6,
            ),
            38 => 
            array (
                'ingredient_id' => 28,
                'effect_id' => 9,
            ),
            39 => 
            array (
                'ingredient_id' => 28,
                'effect_id' => 1,
            ),
            40 => 
            array (
                'ingredient_id' => 29,
                'effect_id' => 3,
            ),
            41 => 
            array (
                'ingredient_id' => 29,
                'effect_id' => 1,
            ),
            42 => 
            array (
                'ingredient_id' => 30,
                'effect_id' => 7,
            ),
            43 => 
            array (
                'ingredient_id' => 30,
                'effect_id' => 1,
            ),
            44 => 
            array (
                'ingredient_id' => 31,
                'effect_id' => 4,
            ),
            45 => 
            array (
                'ingredient_id' => 32,
                'effect_id' => 9,
            ),
            46 => 
            array (
                'ingredient_id' => 32,
                'effect_id' => 1,
            ),
            47 => 
            array (
                'ingredient_id' => 33,
                'effect_id' => 7,
            ),
            48 => 
            array (
                'ingredient_id' => 33,
                'effect_id' => 8,
            ),
            49 => 
            array (
                'ingredient_id' => 33,
                'effect_id' => 6,
            ),
            50 => 
            array (
                'ingredient_id' => 34,
                'effect_id' => 6,
            ),
            51 => 
            array (
                'ingredient_id' => 35,
                'effect_id' => 6,
            ),
            52 => 
            array (
                'ingredient_id' => 36,
                'effect_id' => 7,
            ),
            53 => 
            array (
                'ingredient_id' => 36,
                'effect_id' => 8,
            ),
            54 => 
            array (
                'ingredient_id' => 36,
                'effect_id' => 6,
            ),
            55 => 
            array (
                'ingredient_id' => 36,
                'effect_id' => 10,
            ),
            56 => 
            array (
                'ingredient_id' => 37,
                'effect_id' => 7,
            ),
            57 => 
            array (
                'ingredient_id' => 37,
                'effect_id' => 3,
            ),
            58 => 
            array (
                'ingredient_id' => 38,
                'effect_id' => 3,
            ),
            59 => 
            array (
                'ingredient_id' => 38,
                'effect_id' => 4,
            ),
            60 => 
            array (
                'ingredient_id' => 39,
                'effect_id' => 2,
            ),
            61 => 
            array (
                'ingredient_id' => 39,
                'effect_id' => 8,
            ),
            62 => 
            array (
                'ingredient_id' => 39,
                'effect_id' => 3,
            ),
            63 => 
            array (
                'ingredient_id' => 40,
                'effect_id' => 3,
            ),
            64 => 
            array (
                'ingredient_id' => 40,
                'effect_id' => 9,
            ),
            65 => 
            array (
                'ingredient_id' => 40,
                'effect_id' => 1,
            ),
            66 => 
            array (
                'ingredient_id' => 40,
                'effect_id' => 4,
            ),
            67 => 
            array (
                'ingredient_id' => 40,
                'effect_id' => 5,
            ),
            68 => 
            array (
                'ingredient_id' => 41,
                'effect_id' => 1,
            ),
            69 => 
            array (
                'ingredient_id' => 41,
                'effect_id' => 4,
            ),
            70 => 
            array (
                'ingredient_id' => 42,
                'effect_id' => 3,
            ),
            71 => 
            array (
                'ingredient_id' => 42,
                'effect_id' => 6,
            ),
            72 => 
            array (
                'ingredient_id' => 42,
                'effect_id' => 10,
            ),
            73 => 
            array (
                'ingredient_id' => 44,
                'effect_id' => 11,
            ),
            74 => 
            array (
                'ingredient_id' => 44,
                'effect_id' => 3,
            ),
            75 => 
            array (
                'ingredient_id' => 45,
                'effect_id' => 6,
            ),
            76 => 
            array (
                'ingredient_id' => 46,
                'effect_id' => 7,
            ),
            77 => 
            array (
                'ingredient_id' => 47,
                'effect_id' => 3,
            ),
            78 => 
            array (
                'ingredient_id' => 48,
                'effect_id' => 1,
            ),
            79 => 
            array (
                'ingredient_id' => 50,
                'effect_id' => 6,
            ),
            80 => 
            array (
                'ingredient_id' => 51,
                'effect_id' => 11,
            ),
            81 => 
            array (
                'ingredient_id' => 51,
                'effect_id' => 3,
            ),
            82 => 
            array (
                'ingredient_id' => 51,
                'effect_id' => 12,
            ),
            83 => 
            array (
                'ingredient_id' => 52,
                'effect_id' => 1,
            ),
            84 => 
            array (
                'ingredient_id' => 53,
                'effect_id' => 7,
            ),
            85 => 
            array (
                'ingredient_id' => 53,
                'effect_id' => 4,
            ),
            86 => 
            array (
                'ingredient_id' => 57,
                'effect_id' => 3,
            ),
            87 => 
            array (
                'ingredient_id' => 58,
                'effect_id' => 3,
            ),
            88 => 
            array (
                'ingredient_id' => 58,
                'effect_id' => 9,
            ),
            89 => 
            array (
                'ingredient_id' => 61,
                'effect_id' => 7,
            ),
            90 => 
            array (
                'ingredient_id' => 61,
                'effect_id' => 2,
            ),
            91 => 
            array (
                'ingredient_id' => 61,
                'effect_id' => 8,
            ),
            92 => 
            array (
                'ingredient_id' => 63,
                'effect_id' => 7,
            ),
            93 => 
            array (
                'ingredient_id' => 64,
                'effect_id' => 7,
            ),
            94 => 
            array (
                'ingredient_id' => 64,
                'effect_id' => 8,
            ),
            95 => 
            array (
                'ingredient_id' => 67,
                'effect_id' => 3,
            ),
            96 => 
            array (
                'ingredient_id' => 68,
                'effect_id' => 6,
            ),
            97 => 
            array (
                'ingredient_id' => 70,
                'effect_id' => 3,
            ),
            98 => 
            array (
                'ingredient_id' => 71,
                'effect_id' => 7,
            ),
            99 => 
            array (
                'ingredient_id' => 75,
                'effect_id' => 6,
            ),
            100 => 
            array (
                'ingredient_id' => 77,
                'effect_id' => 7,
            ),
            101 => 
            array (
                'ingredient_id' => 77,
                'effect_id' => 2,
            ),
            102 => 
            array (
                'ingredient_id' => 77,
                'effect_id' => 1,
            ),
        ));
        
        
    }
}