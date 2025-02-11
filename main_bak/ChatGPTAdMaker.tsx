import React, { useState } from 'react';
import DotSlider from './components/DotSlider';
import { applyDottedEffect } from './utils/dotEffect';

const ChatGPTAdMaker = () => {
  const [image, setImage] = useState<string | null>(null);
  const [dotSize, setDotSize] = useState(5);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessImage = () => {
    if (image) {
      const result = applyDottedEffect(image, dotSize);
      setProcessedImage(result);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ChatGPT Ad Maker</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      {image && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Original Image:</h3>
          <img src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />
        </div>
      )}
      <DotSlider value={dotSize} onChange={(value: number) => setDotSize(value)} />
      <button
        onClick={handleProcessImage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply Dotted Effect
      </button>
      {processedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Processed Image:</h3>
          <img src={processedImage} alt="Processed" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ChatGPTAdMaker;