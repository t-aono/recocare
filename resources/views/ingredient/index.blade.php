<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            成分一覧
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-5xl mx-auto">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="mx-10 my-5 flex justify-between">

                    @if ($errors->any())
                        <div class="color-red">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <div>
                        <h3 class="text-lg font-bold mb-3">成分のインポート</h3>
                        <form method="post" action="{{ route('ingredient.store') }}" enctype="multipart/form-data">
                            @csrf
                            <label
                                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-2 border border-gray-400 rounded shadow">
                                CSV ファイル選択<input type="file" name="csv" class="hidden">
                            </label>
                            <input type="submit" name="apply" value="適用"
                                class="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-2 border border-gray-400 rounded shadow">
                        </form>


                        <form method="post" action="{{ route('ingredient.update') }}">
                            @csrf
                            <ul class="my-5">
                                @foreach ($effects as $effect)
                                    <li class="flex items-center">
                                        <button name="effect" value="{{ $effect['id'] }}"
                                            class="bg-white hover:bg-gray-100 {!! $effect['is_use'] ? 'text-gray-400' : 'text-gray-800' !!} font-semibold my-1 py-1 px-2 border border-gray-400 rounded shadow">
                                            @if ($effect['is_use'])
                                                解除
                                            @else
                                                適用
                                            @endif
                                        </button>
                                        <span class="ml-3">{{ $effect['name'] }}</span>
                                        @if ($effect['is_use'])
                                            <span>
                                                <svg class="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                        @endif
                                    </li>
                                @endforeach
                            </ul>
                        </form>
                    </div>

                    @if ($ingredients)
                        <table class="mt-5 table-auto">
                            <tr class="text-lg">
                                <th class="px-4 py-2">成分</th>
                                <th class="px-4 py-2">効果</th>
                            </tr>
                            @foreach ($ingredients as $row)
                                <tr>
                                    <td class="border px-4 py-2">{{ $row['ingredient'] }}</td>
                                    <td class="border px-4 py-2">{{ implode(', ', $row['effects']) }}</td>
                                </tr>
                            @endforeach
                        </table>
                    @endif

                </div>
            </div>
        </div>
    </div>
</x-app-layout>
