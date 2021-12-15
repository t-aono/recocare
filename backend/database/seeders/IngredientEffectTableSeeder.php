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
                'effect_id' => 1,
                'ingredient_id' => 1,
            ),
            1 => 
            array (
                'effect_id' => 2,
                'ingredient_id' => 2,
            ),
            2 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 2,
            ),
            3 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 2,
            ),
            4 => 
            array (
                'effect_id' => 5,
                'ingredient_id' => 2,
            ),
            5 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 4,
            ),
            6 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 6,
            ),
            7 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 7,
            ),
            8 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 7,
            ),
            9 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 7,
            ),
            10 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 8,
            ),
            11 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 9,
            ),
            12 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 9,
            ),
            13 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 9,
            ),
            14 => 
            array (
                'effect_id' => 5,
                'ingredient_id' => 9,
            ),
            15 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 10,
            ),
            16 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 11,
            ),
            17 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 12,
            ),
            18 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 12,
            ),
            19 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 13,
            ),
            20 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 14,
            ),
            21 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 15,
            ),
            22 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 16,
            ),
            23 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 17,
            ),
            24 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 18,
            ),
            25 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 18,
            ),
            26 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 19,
            ),
            27 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 20,
            ),
            28 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 20,
            ),
            29 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 20,
            ),
            30 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 22,
            ),
            31 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 22,
            ),
            32 => 
            array (
                'effect_id' => 5,
                'ingredient_id' => 22,
            ),
            33 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 23,
            ),
            34 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 23,
            ),
            35 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 24,
            ),
            36 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 25,
            ),
            37 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 27,
            ),
            38 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 28,
            ),
            39 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 28,
            ),
            40 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 29,
            ),
            41 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 29,
            ),
            42 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 30,
            ),
            43 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 30,
            ),
            44 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 31,
            ),
            45 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 32,
            ),
            46 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 32,
            ),
            47 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 33,
            ),
            48 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 33,
            ),
            49 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 33,
            ),
            50 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 34,
            ),
            51 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 35,
            ),
            52 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 36,
            ),
            53 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 36,
            ),
            54 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 36,
            ),
            55 => 
            array (
                'effect_id' => 10,
                'ingredient_id' => 36,
            ),
            56 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 37,
            ),
            57 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 37,
            ),
            58 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 38,
            ),
            59 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 38,
            ),
            60 => 
            array (
                'effect_id' => 2,
                'ingredient_id' => 39,
            ),
            61 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 39,
            ),
            62 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 39,
            ),
            63 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 40,
            ),
            64 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 40,
            ),
            65 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 40,
            ),
            66 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 40,
            ),
            67 => 
            array (
                'effect_id' => 5,
                'ingredient_id' => 40,
            ),
            68 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 41,
            ),
            69 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 41,
            ),
            70 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 42,
            ),
            71 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 42,
            ),
            72 => 
            array (
                'effect_id' => 10,
                'ingredient_id' => 42,
            ),
            73 => 
            array (
                'effect_id' => 11,
                'ingredient_id' => 44,
            ),
            74 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 44,
            ),
            75 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 45,
            ),
            76 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 46,
            ),
            77 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 47,
            ),
            78 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 48,
            ),
            79 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 50,
            ),
            80 => 
            array (
                'effect_id' => 11,
                'ingredient_id' => 51,
            ),
            81 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 51,
            ),
            82 => 
            array (
                'effect_id' => 12,
                'ingredient_id' => 51,
            ),
            83 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 52,
            ),
            84 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 53,
            ),
            85 => 
            array (
                'effect_id' => 4,
                'ingredient_id' => 53,
            ),
            86 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 57,
            ),
            87 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 58,
            ),
            88 => 
            array (
                'effect_id' => 9,
                'ingredient_id' => 58,
            ),
            89 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 61,
            ),
            90 => 
            array (
                'effect_id' => 2,
                'ingredient_id' => 61,
            ),
            91 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 61,
            ),
            92 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 63,
            ),
            93 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 64,
            ),
            94 => 
            array (
                'effect_id' => 8,
                'ingredient_id' => 64,
            ),
            95 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 67,
            ),
            96 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 68,
            ),
            97 => 
            array (
                'effect_id' => 3,
                'ingredient_id' => 70,
            ),
            98 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 71,
            ),
            99 => 
            array (
                'effect_id' => 6,
                'ingredient_id' => 75,
            ),
            100 => 
            array (
                'effect_id' => 7,
                'ingredient_id' => 77,
            ),
            101 => 
            array (
                'effect_id' => 2,
                'ingredient_id' => 77,
            ),
            102 => 
            array (
                'effect_id' => 1,
                'ingredient_id' => 77,
            ),
        ));
        
        
    }
}