<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GenresTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('genres')->delete();
        
        \DB::table('genres')->insert(array (
            0 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '210450',
                'id' => 1,
                'is_use' => '0',
                'name' => 'クレンジング',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            1 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216301',
                'id' => 2,
                'is_use' => '0',
                'name' => '洗顔料',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            2 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216307',
                'id' => 3,
                'is_use' => '1',
                'name' => '化粧水・ローション',
                'updated_at' => '2021-12-18 22:19:14',
            ),
            3 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '567441',
                'id' => 4,
                'is_use' => '0',
                'name' => '保湿ミスト',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            4 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216348',
                'id' => 5,
                'is_use' => '1',
                'name' => '美容液',
                'updated_at' => '2021-12-18 22:19:31',
            ),
            5 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216387',
                'id' => 6,
                'is_use' => '0',
                'name' => '乳液・ミルク',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            6 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216424',
                'id' => 7,
                'is_use' => '1',
                'name' => 'フェイスクリーム',
                'updated_at' => '2021-12-18 22:19:44',
            ),
            7 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216461',
                'id' => 8,
                'is_use' => '0',
                'name' => 'フェイスオイル',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            8 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '567440',
                'id' => 9,
                'is_use' => '0',
                'name' => '保湿ジェル',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            9 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '563728',
                'id' => 10,
                'is_use' => '0',
                'name' => 'オールインワン化粧品',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            10 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '216467',
                'id' => 11,
                'is_use' => '0',
                'name' => 'ジェルパック・クリーム',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            11 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '503020',
                'id' => 12,
                'is_use' => '0',
                'name' => 'シートマスク・フェイスパック',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            12 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '503044',
                'id' => 13,
                'is_use' => '0',
                'name' => 'ピーリング・ゴマージュ',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            13 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '509822',
                'id' => 14,
                'is_use' => '0',
                'name' => '目元美容液',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            14 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '509843',
                'id' => 15,
                'is_use' => '0',
                'name' => 'アイクリーム・ジェル',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            15 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '405206',
                'id' => 16,
                'is_use' => '0',
                'name' => 'リップクリーム',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            16 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '567442',
                'id' => 17,
                'is_use' => '0',
                'name' => 'セット',
                'updated_at' => '2021-12-18 22:19:02',
            ),
            17 => 
            array (
                'created_at' => '2021-12-18 22:19:02',
                'genre_id' => '112849',
                'id' => 18,
                'is_use' => '0',
                'name' => 'その他',
                'updated_at' => '2021-12-18 22:19:02',
            ),
        ));
        
        
    }
}