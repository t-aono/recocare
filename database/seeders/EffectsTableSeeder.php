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
                'id' => 1,
                'name' => '美白',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:36',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'ざらつき',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:38',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'ニキビ',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:39',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'シワ・たるみ',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:44',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'ハリ・弾力',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:43',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => '薄毛（育毛）',
                'is_use' => '0',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => '乾燥',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:49',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'ゆらぎ肌',
                'is_use' => '0',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => '日焼け',
                'is_use' => '0',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'オーラルケア',
                'is_use' => '0',
                'created_at' => '2021-12-15 20:12:30',
                'updated_at' => '2021-12-15 20:12:30',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'テカリ',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:31',
                'updated_at' => '2021-12-15 20:12:47',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => '毛穴',
                'is_use' => '1',
                'created_at' => '2021-12-15 20:12:31',
                'updated_at' => '2021-12-15 20:12:46',
            ),
        ));
        
        
    }
}