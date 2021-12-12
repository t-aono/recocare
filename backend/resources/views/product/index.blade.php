<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            商品一覧
        </h2>
    </x-slot>


    <div class="py-12">
        <div class="max-w-5xl mx-auto">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="mx-10 my-5">

                    <form method="post" action="{{ route('product.update') }}">
                        <div>
                            <h3 class="text-lg font-bold mb-3">
                                ジャンル
                                <span class="text-xs font-normal">想定ジャンル：クレンジング、洗顔料、化粧水、美容液、乳液、フェイスクリーム、フェイスパック
                                </span>
                            </h3>
                            @if ($errors->any())
                                <div class="color-red">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            @csrf
                            <input type="submit" name="genre" value="ジャンル更新"
                                class="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-2 border border-gray-400 rounded shadow" />
                            <ul class="my-5 flex flex-wrap">
                                @foreach ($genres as $genre)
                                    <li class="w-1/3 py-2">
                                        <label for="{{ $genre['genre_id'] }}">
                                            <input type="checkbox" name="genre_id[]" id="{{ $genre['genre_id'] }}"
                                                value="{{ $genre['genre_id'] }}" />
                                            {{ $genre['name'] }}
                                        </label>
                                    </li>
                                @endforeach
                            </ul>
                        </div>

                        <div class='my-5'>
                            <input type="submit" name="item" value="商品データ更新"
                                class="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-2 border border-gray-400 rounded shadow" />

                            <table class="mt-5 table-auto">
                                <tr class="text-lg">
                                    <th class="px-4 py-2">ジャンル名</th>
                                    <th class="px-4 py-2">ジャンルID</th>
                                    <th class="px-4 py-2">商品数</th>
                                </tr>
                                @foreach ($result as $genre)
                                    <tr>
                                        <td class="border px-4 py-2">{{ $genre['name'] }}</td>
                                        <td class="border px-4 py-2">{{ $genre['id'] }}</td>
                                        <td class="border px-4 py-2">{{ $genre['count'] }}</td>
                                    </tr>
                                @endforeach
                            </table>

                        </div>
                    </form>

                </div>
            </div>
        </div>
</x-app-layout>
