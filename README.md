# Kamui ChatGPT Ad Maker

画像をドット絵スタイルに変換するウェブアプリケーション

## 概要

このプロジェクトは、画像をアップロードすると白黒のドット絵に変換できるウェブアプリケーションです。OpenAIのスーパーボール広告で使用されたようなドット表現スタイルを、Canvas APIを使って再現します。

## 主な機能

- **画像のアップロード**
  - ドラッグ＆ドロップまたはファイル選択で画像をアップロード
  - 対応フォーマット: PNG, JPG, GIF
- **ドットサイズの調整**
  - スライダーを使って、ドットの大きさを細かく調整可能
- **ドットエフェクトの適用**
  - アップロードされた画像に白黒のドットエフェクトを適用
  - 画像の明暗に応じてドットサイズが変化
- **リアルタイムプレビュー**
  - 元の画像とドット処理後の画像を並べて表示
  - 処理結果をすぐに確認可能

## 技術スタック

- React（関数コンポーネント + Hooks）
- TypeScript
- Tailwind CSS（UIスタイリング）
- Canvas API（画像処理）

## 主要コンポーネント

- `ChatGPTAdMaker.tsx`: メインコンポーネント
  - 画像のアップロード処理
  - ドットサイズの状態管理
  - UI全体のレイアウト
- `DotSlider.tsx`: ドットサイズ調整用スライダー
  - カスタマイズされたレンジスライダー
  - 1-20のサイズ範囲
- `dotEffect.ts`: ドット処理ロジック
  - Canvas APIを使用した画像処理
  - グレースケール変換
  - ドットパターン生成

## 開発環境のセットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/furoku/kamui-chatgptad.git
cd kamui-chatgptad
```

2. 依存パッケージのインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm start
```

## 環境変数の設定

`.env`ファイルを作成し、必要な環境変数を設定してください：

```
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## クレジット

このプロジェクトは、OpenAIの2024年スーパーボール広告で使用されたドット表現スタイルから着想を得ています。
オリジナルの広告：[OpenAI Super Bowl LVIII Commercial](https://www.youtube.com/watch?v=Y8GtKnz6Zs8) 