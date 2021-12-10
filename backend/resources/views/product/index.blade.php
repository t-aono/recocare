<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            商品一覧
        </h2>
    </x-slot>

    <div>
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
        
    </div>
</x-app-layout>