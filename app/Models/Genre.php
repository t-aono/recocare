<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = ['genre_id', 'name', 'is_use'];

    public function trancateAndCreate($children)
    {
        DB::statement('SET CONSTRAINTS ALL DEFERRED;');
        DB::table('genres')->truncate();
        DB::statement('SET CONSTRAINTS ALL IMMEDIATE;');

        foreach ($children as $child) {
            $this->create($child);
        }
    }

    public function setUseGenre($genre_id)
    {
        $this->where('genre_id', $genre_id)->update([
            'is_use' => 1
        ]);
    }
}
