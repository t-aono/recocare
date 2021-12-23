# Recosk

## Docker 環境を構築

```bash
make up
make stop
make restart
etc
```

-   ホーム URL：http://localhost
-   管理画面：http://localhost/login  
    recos3221@ne.jp / 3221

## コンテナ構造

```bash
├── app
├── web
└── db
```

### app container

-   Base image
    -   [php](https://hub.docker.com/_/php):8.0-fpm-bullseye
    -   [composer](https://hub.docker.com/_/composer):2.1

### web container

-   Base image
    -   [nginx](https://hub.docker.com/_/nginx):1.20-alpine
    -   [node](https://hub.docker.com/_/node):16-alpine

### db container

-   Base image
    -   [mysql/mysql-server](https://hub.docker.com/r/mysql/mysql-server):8.0

## フロントエンド

### ローカル

-   frontend フォルダにて `yarn start`  
    http://localhost:3000 にアクセス

### ビルド

-   frontend フォルダにて `yarn build`  
    ⇨ public にファイル生成される

## データ準備

### 効果と成分

-   [サイト](https://liruu.jp/ingredients/)からスクレイピング  
    [スプレッドシート「化粧品成分一覧」](https://docs.google.com/spreadsheets/d/1KvcgP5QfpR3PxW7kzyUeMIP1WJ7lY35aNQ1QduyJIkA/edit#gid=0)
-   csv 出力して成分一覧からインポート  
    http://localhost/ingredient

### ジャンルと商品

-   商品一覧から Rakuten API で取得  
    http://localhost/product

### DB から Seeder を作成

-   `php artisan iseed <table-name>`

## 本番環境
- ユーザー画面  
    - [https://recosk.tk](https://recosk.tk)

-   ホスティング
    -   [heroku](https://dashboard.heroku.com/apps/recosk)
    -   [スリープ対策：UptimeRobot](https://uptimerobot.com/dashboard#mainDashboard)
-   コマンド
    -   フロントのビルド　`cd frontend` → `yarn build`
    -   デプロイ　　　　　`git push heroku HEAD:main`
    -   ログイン　　　　　`heroku login`
    -   マイグレーション　`heroku run php artisan migrate`
    -   シーディング　　　`heroku run php artisan db:seed`
-   ドメイン
    -   [freenom](https://my.freenom.com/clientarea.php?action=domains)
-   SSL 化
    -   [CLOUDFLARE](https://dash.cloudflare.com/9587da9b35449514f8ac93d2a9857a8f/recosk.tk)
