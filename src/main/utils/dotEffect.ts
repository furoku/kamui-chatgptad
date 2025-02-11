// applyDottedEffect: Applies a black and white dotted effect to an image asynchronously using HTML canvas.
export const applyDottedEffect = (imageSrc: string, dotSize: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return reject(new Error('Failed to get canvas context'));
    }
    const img = new Image();
    img.onload = () => {
      // キャンバスのサイズを設定
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 元の画像を描画
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // 白背景で初期化
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ドットのグリッドサイズを設定
      const gridSize = Math.max(4, dotSize * 2); // 最小グリッドサイズは4px

      // グリッドごとに処理
      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          // グリッド内の平均色を計算
          let totalR = 0, totalG = 0, totalB = 0;
          let count = 0;

          // グリッド内のピクセルを走査
          for (let dy = 0; dy < gridSize && y + dy < canvas.height; dy++) {
            for (let dx = 0; dx < gridSize && x + dx < canvas.width; dx++) {
              const index = ((y + dy) * canvas.width + (x + dx)) * 4;
              totalR += data[index];
              totalG += data[index + 1];
              totalB += data[index + 2];
              count++;
            }
          }

          // 平均色を計算
          const avgR = totalR / count;
          const avgG = totalG / count;
          const avgB = totalB / count;

          // グレースケール値を計算（輝度）
          const grayscale = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;
          
          // ドットの大きさを輝度に基づいて計算（暗いほど大きく）
          const brightness = grayscale / 255;
          const dotRadius = (gridSize / 2) * (1 - brightness) * 0.95; // 0.95は最大サイズの制限

          // ドットを描画
          if (dotRadius > 0) {
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(
              x + gridSize / 2, // グリッドの中心X
              y + gridSize / 2, // グリッドの中心Y
              dotRadius,        // 輝度に基づく半径
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        }
      }

      resolve(canvas.toDataURL());
    };
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    img.src = imageSrc;
  });
};