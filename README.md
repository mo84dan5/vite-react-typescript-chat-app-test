# Vite + React + TypeScript チャットアプリ

LINE風のUIを持つチャットアプリケーションです。

## 機能

- LINE風のチャットUI
- メッセージ送信機能
- モック応答（ランダムな返信）
- 将来的にLLM APIに置き換え可能な設計

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# GitHub Pagesへのデプロイ
npm run deploy
```

## デプロイ

`npm run deploy`コマンドでGitHub Pagesに自動デプロイされます。
dist以下のビルド結果がgh-pagesブランチにプッシュされます。

## 技術スタック

- Vite
- React
- TypeScript
- CSS