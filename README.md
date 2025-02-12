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

### 開発時の注意点

#### バージョン管理対象外のファイル
以下のファイルやディレクトリは、開発環境固有のものやバックアップファイルのため、Gitの管理対象から除外されています：

- `.cursor/`: Cursor IDE固有の設定ファイル
- `main_bak/`: バックアップディレクトリ
- `structure.yaml`: プロジェクト構造定義ファイル
- `node_modules/`: 依存パッケージ
- `.env`関連ファイル: 環境変数設定ファイル
- `dist/`, `build/`: ビルド出力ディレクトリ
- `.DS_Store`, `Thumbs.db`: OS固有のシステムファイル

これらのファイルは`.gitignore`で管理されており、リポジトリにコミットされません。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## クレジット

このプロジェクトは、OpenAIのスーパーボール広告（Super Bowl LVIII, 2024）で使用されたドット表現スタイルから着想を得ています。

参考動画：
- [OpenAI Super Bowl LVIII Commercial](https://www.youtube.com/watch?v=Y8GtKnz6Zs8)
- [OpenAI Super Bowl Commercial - Behind the Scenes](https://www.youtube.com/watch?v=kIhb5pEo_j0) 