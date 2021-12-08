<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>商品一覧</title>
    <style>
        ul {
           list-style: none;
           display: flex;
           flex-wrap: wrap;
           gap: 10px 15px;
        }
        .color-red {
            color: darkred;
        }
    </style>
</head>
<body>
    <h1>商品一覧</h1>
    
        @if ($errors->any())
            <div class="color-red">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

    <form method="post" action="{{ route('product.update') }}">
        @csrf
        <input type="submit" name="genre" value="ジャンル更新" />
        
        <ul>
            @foreach ($genres as $genre)
            <li>
                <label for="{{ $genre['genre_id'] }}">
                    <input type="checkbox" name="genre_id[]" id="{{ $genre['genre_id'] }}" value="{{$genre['genre_id']}}" />
                    {{ $genre['name'] }}
                </label>
                @if ($genre['is_use'])
                    <small>データあり</small>   
                @endif
            </li>
            @endforeach
        </ul>
        <input type="submit" name="item" value="商品データ更新" />

        <br><br><br>
        <div>アンケートのカテゴリ（ジャンル）は以下を想定</div>
        <ul>
            <li>クレンジング</li>
            <li>洗顔料</li>
            <li>化粧水</li>
            <li>美容液</li>
            <li>乳液</li>
            <li>フェイスクリーム</li>
            <li>フェイスパック</li>
        </ul>
    </form>
        
</body>
</html>