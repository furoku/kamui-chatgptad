export const applyDottedEffect = (imageSrc: string, dotSize: number): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = imageSrc;

  return new Promise((resolve) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < canvas.height; y += dotSize) {
        for (let x = 0; x < canvas.width; x += dotSize) {
          const index = (y * canvas.width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const gray = 0.3 * r + 0.59 * g + 0.11 * b;
          
          ctx.fillStyle = gray < 128 ? 'black' : 'white';
          ctx.beginPath();
          ctx.arc(x + dotSize/2, y + dotSize/2, dotSize/2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      resolve(canvas.toDataURL());
    };
  });
};