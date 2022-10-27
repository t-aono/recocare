# Recocare

## 概要

おすすめスキンケア商品をオリジナルランキング形式で紹介するWebサービス。  
３つの質問に答えるとスキンケア商品のおすすめランキングを生成します。  

## 機能

- 利用者が選択した悩みに応じて化粧品のおすすめランキングを表示
- 商品名を押すと商品紹介ページに遷移
- 化粧品の成分データは楽天商品検索APIから取得（管理者側）
- 成分と対応する悩みを点数化してDBに保存（管理者側）
- 表示対象の商品やカテゴリの管理（管理者側）

## 使用技術

- フロントエンド：TypeScript, React, Chakra UI
- バックエンド：Laravel
- サーバー / DB：Heroku, Heroku Postgres

## デモ



## ローカルでの動作方法

### バックエンド

コマンド
```bash
# Docker環境構築
make up
make stop
make restart
etc

# DBからSeederを作成
php artisan iseed <table-name>

# シーディング
php artisan db:seed
```

URL
- トップページ：http://localhost
- 管理画面：http://localhost/login  


Seederファイルについて

- `database/seeders`配下に作成される。
- GitHubリポジトリのサイズに上限はないが１GB未満推奨。  
- 100MBのファイルを push できないので注意。


### フロントエンド

コマンド
```bash
# 開発サーバー起動
cd frontend
yarn start
```

URL
http://localhost:3000

### デプロイ

コマンド	
```bash
# フロントのビルド（frontend/.env.productionでREACT_APP_BACKEND_HOSTが必要）
cd frontend && yarn build

# Herokuへデプロイ（.env.herokuが必要）
git push heroku HEAD:main

# Heroku CLI ログイン
heroku login

# マイグレーション / 初期化 / シーディング
heroku run php artisan migrate
heroku run php artisan migrate:fresh
heroku run php artisan db:seed
```
