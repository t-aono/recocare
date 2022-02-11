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
                'id' => 4,
                'genre_id' => '567441',
                'name' => '保湿ミスト',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            1 => 
            array (
                'id' => 8,
                'genre_id' => '216461',
                'name' => 'フェイスオイル',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            2 => 
            array (
                'id' => 9,
                'genre_id' => '567440',
                'name' => '保湿ジェル',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            3 => 
            array (
                'id' => 10,
                'genre_id' => '563728',
                'name' => 'オールインワン化粧品',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            4 => 
            array (
                'id' => 11,
                'genre_id' => '216467',
                'name' => 'ジェルパック・クリーム',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            5 => 
            array (
                'id' => 13,
                'genre_id' => '503044',
                'name' => 'ピーリング・ゴマージュ',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            6 => 
            array (
                'id' => 14,
                'genre_id' => '509822',
                'name' => '目元美容液',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            7 => 
            array (
                'id' => 15,
                'genre_id' => '509843',
                'name' => 'アイクリーム・ジェル',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            8 => 
            array (
                'id' => 16,
                'genre_id' => '405206',
                'name' => 'リップクリーム',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            9 => 
            array (
                'id' => 17,
                'genre_id' => '568658',
                'name' => 'リッププランパー',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            10 => 
            array (
                'id' => 18,
                'genre_id' => '567442',
                'name' => 'セット',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            11 => 
            array (
                'id' => 19,
                'genre_id' => '112849',
                'name' => 'その他',
                'is_use' => '0',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:13:08',
            ),
            12 => 
            array (
                'id' => 1,
                'genre_id' => '210450',
                'name' => 'クレンジング',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:18:53',
            ),
            13 => 
            array (
                'id' => 2,
                'genre_id' => '216301',
                'name' => '洗顔料',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:53:26',
            ),
            14 => 
            array (
                'id' => 3,
                'genre_id' => '216307',
                'name' => '化粧水・ローション',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 17:53:45',
            ),
            15 => 
            array (
                'id' => 5,
                'genre_id' => '216348',
                'name' => '美容液',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 19:35:26',
            ),
            16 => 
            array (
                'id' => 6,
                'genre_id' => '216387',
                'name' => '乳液・ミルク',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 19:35:40',
            ),
            17 => 
            array (
                'id' => 7,
                'genre_id' => '216424',
                'name' => 'フェイスクリーム',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 19:36:21',
            ),
            18 => 
            array (
                'id' => 12,
                'genre_id' => '503020',
                'name' => 'シートマスク・フェイスパック',
                'is_use' => '1',
                'created_at' => '2022-02-11 17:13:08',
                'updated_at' => '2022-02-11 19:36:35',
            ),
        ));
        
        
    }
}