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

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## クレジット

このプロジェクトは、OpenAIのスーパーボール広告（Super Bowl LVIII, 2024）で使用されたドット表現スタイルから着想を得ています。

参考動画：
- [OpenAI Super Bowl LVIII Commercial](https://www.youtube.com/watch?v=Y8GtKnz6Zs8)
- [OpenAI Super Bowl Commercial - Behind the Scenes](https://www.youtube.com/watch?v=kIhb5pEo_j0)

---

# Kamui ChatGPT Ad Maker [English]

A web application that converts images into dot art style

## Overview

This project is a web application that converts uploaded images into black and white dot art. It recreates the dot expression style used in OpenAI's Super Bowl commercial using the Canvas API.

## Key Features

- **Image Upload**
  - Upload images via drag & drop or file selection
  - Supported formats: PNG, JPG, GIF
- **Dot Size Adjustment**
  - Fine-tune dot size using a slider
- **Dot Effect Application**
  - Apply black and white dot effect to uploaded images
  - Dot size varies based on image brightness
- **Real-time Preview**
  - Side-by-side display of original and processed images
  - Instant result confirmation

## Tech Stack

- React (Function Components + Hooks)
- TypeScript
- Tailwind CSS (UI Styling)
- Canvas API (Image Processing)

## Core Components

- `ChatGPTAdMaker.tsx`: Main Component
  - Image upload handling
  - Dot size state management
  - Overall UI layout
- `DotSlider.tsx`: Dot Size Adjustment Slider
  - Customized range slider
  - Size range of 1-20
- `dotEffect.ts`: Dot Processing Logic
  - Image processing using Canvas API
  - Grayscale conversion
  - Dot pattern generation

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/furoku/kamui-chatgptad.git
cd kamui-chatgptad
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

## License

This project is released under the MIT License.

## Credits

This project is inspired by the dot expression style used in OpenAI's Super Bowl commercial (Super Bowl LVIII, 2024).

Reference Videos:
- [OpenAI Super Bowl LVIII Commercial](https://www.youtube.com/watch?v=Y8GtKnz6Zs8)
- [OpenAI Super Bowl Commercial - Behind the Scenes](https://www.youtube.com/watch?v=kIhb5pEo_j0) 