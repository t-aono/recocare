# Recocare

## Docker 環境を構築

```bash
make up
make stop
make restart
etc
```

- ホーム URL：http://localhost
- 管理画面：http://localhost/login  
  recos3221@ne.jp / 3221

## コンテナ構造

```bash
├── app
├── web
└── db
```

### app container

Base image : [php](https://hub.docker.com/_/php):8.0-fpm-bullseye / [composer](https://hub.docker.com/_/composer):2.1

### web container

Base image : [nginx](https://hub.docker.com/_/nginx):1.20-alpine / [node](https://hub.docker.com/_/node):16-alpine

### db container

Base image : [postgres](https://hub.docker.com/_/postgres)

## フロントエンド

### ローカル開発環境

frontend フォルダにて `yarn start` → http://localhost:3000 にアクセス

### デプロイ時のビルド

frontend フォルダにて `yarn build` → public にファイル生成される

### ヘッダー画像

Canva を使って作成

## データ準備

### 効果と成分

[サイト](https://liruu.jp/ingredients/)からスクレイピング → csv 出力して成分一覧からインポート

- データ：[スプレッドシート「化粧品成分一覧」](https://docs.google.com/spreadsheets/d/1KvcgP5QfpR3PxW7kzyUeMIP1WJ7lY35aNQ1QduyJIkA/edit#gid=0)
- インポート画面：http://localhost/ingredient

### ジャンルと商品

商品一覧から [楽天商品検索API](https://webservice.rakuten.co.jp/documentation/ichiba-item-search) で取得（アプリ ID・アフィリエイト ID が必要）  
商品一覧ページ：http://localhost/product

### DB から Seeder を作成

以下のコマンドで Seeder ファイルが作成できる。

```
php artisan iseed <table-name>
```

## 本番環境

- ユーザー画面：[https://recocare.tk](https://recocare.tk)

- ホスティング：[heroku](https://dashboard.heroku.com/apps/recocare)

- スリープ対策：[UptimeRobot](https://uptimerobot.com/dashboard#mainDashboard)

- ドメイン：[freenom](https://my.freenom.com/clientarea.php?action=domains)

- SSL 化：[CLOUDFLARE](https://dash.cloudflare.com/9587da9b35449514f8ac93d2a9857a8f/recocare.tk)

- デプロイ関連コマンド

    ```
    フロントのビルド
    cd frontend && yarn build

    Herokuへデプロイ
    git push heroku HEAD:main

    Heroku CLI ログイン
    heroku login

    マイグレーション
    heroku run php artisan migrate

    シーディング
    heroku run php artisan db:seed
    ```
