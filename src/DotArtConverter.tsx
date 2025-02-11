import React, { useRef, useState, ChangeEvent } from "react";

interface DotArtConverterProps {
  dotSize?: number;      // 1ピクセルをどれくらい拡大して描画するか
  threshold?: number;    // 白黒を分ける明度の閾値(0~255)
  previewWidth?: number; // 表示用キャンバス幅(px)
}

const DotArtConverter: React.FC<DotArtConverterProps> = ({
  dotSize = 5,
  threshold = 128,
  previewWidth = 400
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dotArtDataUrl, setDotArtDataUrl] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    // 画像ファイルを読み込み、Imageオブジェクトを生成
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const originalWidth = img.width;
      const originalHeight = img.height;

      // 隠しキャンバスで元画像を読み込み、ピクセルデータを取得
      const hiddenCanvas = document.createElement("canvas");
      hiddenCanvas.width = originalWidth;
      hiddenCanvas.height = originalHeight;
      const hiddenCtx = hiddenCanvas.getContext("2d");
      if (!hiddenCtx) return;
      hiddenCtx.drawImage(img, 0, 0);
      const imageData = hiddenCtx.getImageData(0, 0, originalWidth, originalHeight);
      const data = imageData.data;

      // 出力用キャンバス
      const dotCanvas = document.createElement("canvas");
      dotCanvas.width = originalWidth;
      dotCanvas.height = originalHeight;
      const dotCtx = dotCanvas.getContext("2d");
      if (!dotCtx) return;

      // キャンバスを白で塗りつぶす
      dotCtx.fillStyle = "#ffffff";
      dotCtx.fillRect(0, 0, originalWidth, originalHeight);

      // 各ピクセル毎にドット描画(四角形)する
      for (let y = 0; y < originalHeight; y += dotSize) {
        for (let x = 0; x < originalWidth; x += dotSize) {
          // (x, y) のピクセルのRGBを取得
          const index = (y * originalWidth + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const avg = (r + g + b) / 3;

          // 明度が閾値より低い場合黒ドットを描画
          if (avg < threshold) {
            dotCtx.fillStyle = "#000000";
            dotCtx.fillRect(x, y, dotSize, dotSize);

            // もし円ドットにしたい場合は、以下を使用:
            // dotCtx.beginPath();
            // dotCtx.arc(x + dotSize / 2, y + dotSize / 2, dotSize / 2, 0, 2 * Math.PI);
            // dotCtx.fill();
          }
        }
      }

      // 生成したキャンバスをData URLに変換してstateに保存
      const resultDataUrl = dotCanvas.toDataURL("image/png");
      setDotArtDataUrl(resultDataUrl);
    };
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ドットアート変換デモ</h2>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {dotArtDataUrl && (
        <div>
          <p className="mb-2">変換結果:</p>
          <img
            src={dotArtDataUrl}
            alt="dot-art-preview"
            style={{ width: previewWidth }}
            className="border border-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default DotArtConverter; 