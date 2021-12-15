<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EffectsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('effects')->delete();
        
        \DB::table('effects')->insert(array (
            0 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 1,
                'is_use' => '1',
                'name' => '美白',
                'updated_at' => '2021-12-15 20:12:36',
            ),
            1 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 2,
                'is_use' => '1',
                'name' => 'ざらつき',
                'updated_at' => '2021-12-15 20:12:38',
            ),
            2 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 3,
                'is_use' => '1',
                'name' => 'ニキビ',
                'updated_at' => '2021-12-15 20:12:39',
            ),
            3 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 4,
                'is_use' => '1',
                'name' => 'シワ・たるみ',
                'updated_at' => '2021-12-15 20:12:44',
            ),
            4 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 5,
                'is_use' => '1',
                'name' => 'ハリ・弾力',
                'updated_at' => '2021-12-15 20:12:43',
            ),
            5 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 6,
                'is_use' => '0',
                'name' => '薄毛（育毛）',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            6 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 7,
                'is_use' => '1',
                'name' => '乾燥',
                'updated_at' => '2021-12-15 20:12:49',
            ),
            7 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 8,
                'is_use' => '0',
                'name' => 'ゆらぎ肌',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            8 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 9,
                'is_use' => '0',
                'name' => '日焼け',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            9 => 
            array (
                'created_at' => '2021-12-15 20:12:30',
                'id' => 10,
                'is_use' => '0',
                'name' => 'オーラルケア',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            10 => 
            array (
                'created_at' => '2021-12-15 20:12:31',
                'id' => 11,
                'is_use' => '1',
                'name' => 'テカリ',
                'updated_at' => '2021-12-15 20:12:47',
            ),
            11 => 
            array (
                'created_at' => '2021-12-15 20:12:31',
                'id' => 12,
                'is_use' => '1',
                'name' => '毛穴',
                'updated_at' => '2021-12-15 20:12:46',
            ),
        ));
        
        
    }
}