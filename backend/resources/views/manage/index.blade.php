<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Recos Manage</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="css/normalize.css">

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }

        .icon {
            margin: 1em;
        }

    </style>
</head>

<body class="antialiased">
    <div
        class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        @if (Route::has('login'))
            <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                @auth
                    <a href="{{ url('/dashboard') }}"
                        class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</a>
                @else
                    <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}"
                            class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                    @endif
                @endauth
            </div>
        @endif

        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">

            <div class="text-center text-lg text-gray-500 sm:text-right sm:ml-0">
                Recos 管理画面
            </div>

            <div class="icon">
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="#a0aec0">
                    <g>
                        <path class="st0" d="M429.193,255.361c-10.338-26.562-27.764-48.818-49.811-65.805c-19.845-15.284-43.403-26.346-69.102-32.786
  v-31.94l41.707-58.393L309.279,0h-5.948h-100.61l-42.708,66.436l41.707,58.386v31.948c-35.221,8.82-66.451,26.346-89.516,51.491
  c-12.464,13.59-22.502,29.398-29.397,47.1c-6.888,17.696-10.632,37.27-10.624,58.293c0.008,24.829,4.599,49.389,12.203,72.33
  c11.432,34.42,29.574,65.189,49.989,87.868c10.223,11.324,21.023,20.661,32.124,27.332c5.554,3.343,11.186,6.017,16.918,7.888
  c5.716,1.864,11.54,2.928,17.364,2.928h110.439c7.782,0,15.515-1.88,23.066-5.061c13.204-5.601,26.03-15.184,38.187-27.594
  c18.196-18.636,34.866-43.749,47.17-72.361c12.279-28.612,20.168-60.736,20.176-93.33
  C439.825,292.631,436.081,273.063,429.193,255.361z M186.344,65.789l28.28-43.987h82.76l28.28,43.987l-31.885,44.643h-75.557
  L186.344,65.789z M288.486,132.225v24.498h-64.972v-24.498H288.486z M406.93,379.128c-10.431,31.508-27.333,60.011-45.49,80.133
  c-9.06,10.053-18.428,18.011-27.163,23.249c-4.368,2.62-8.566,4.576-12.457,5.84c-3.883,1.271-7.442,1.848-10.601,1.848H200.78
  c-4.206,0.008-9.144-1.04-14.591-3.343c-9.522-3.991-20.43-11.833-31.076-22.749c-16.008-16.348-31.462-39.458-42.724-65.727
  c-11.294-26.278-18.42-55.69-18.412-84.726c0-18.458,3.259-35.259,9.144-50.389c8.836-22.664,23.627-41.654,42.809-56.452
  c16.64-12.835,36.623-22.449,58.702-28.288h102.667c30.591,8.081,57.114,23.388,76.428,44.473
  c10.723,11.694,19.259,25.152,25.152,40.274c5.894,15.122,9.144,31.924,9.144,50.382
  C418.023,335.779,413.894,358.112,406.93,379.128z" />
                        <rect x="180.804" y="272.247" class="st0" width="150.391" height="117.696" />
                    </g>
                </svg>
            </div>

        </div>
    </div>
</body>

</html>
