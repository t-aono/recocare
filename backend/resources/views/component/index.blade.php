<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>成分一覧</title>
    <style>
        .color-red {
            color: darkred;
        }
    </style>
</head>
<body>
    <div>
    <h1>成分一覧</h1>

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

        <table>
            <tr>
                <th>成分</th>
                <th>効果</th>
            </tr>
            @foreach ($list as $row)
                <tr>
                    <td>{{ $row['component'] }}</td>
                    <td>{{ implode(', ', $row['effects']) }}
                    </td>
                </tr>
            @endforeach
        </table>
    </div>
</body>
</html>