<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = ['genre_id', 'genre_name'];

    public function trancateAndInsert($children) {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('genres')->truncate();
        DB::table('genres')->insert($children);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
