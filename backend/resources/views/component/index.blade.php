<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            成分一覧
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

        <form method="post" action="{{ route('component.store') }}" enctype="multipart/form-data">
            @csrf
            <label>CSV ファイル</label>
            <input type="file" name="csv">
            <input type="submit" name="apply" value="適用">
        </form>
            

        <form method="post" action="{{ route('component.update') }}">
            @csrf
            <ul>
                @foreach ($effects as $effect)
                <li>
                    <button name="effect" value="{{ $effect['id'] }}">
                        @if ($effect['is_use'])
                            解除
                        @else
                            適用
                        @endif
                    </button>
                    {{$effect['name']}}
                    @if ($effect['is_use']) <span>◯</span> @endif
                </li>
                @endforeach
            </ul>
        </form>

        @if ($components)
            <table>
                <tr>
                    <th>成分</th>
                    <th>効果</th>
                </tr>
                @foreach ($components as $row)
                    <tr>
                        <td>{{ $row['component'] }}</td>
                        <td>{{ implode(', ', $row['effects']) }}
                        </td>
                    </tr>
                @endforeach
            </table>
        @endif
    </div>
</x-app-layout>