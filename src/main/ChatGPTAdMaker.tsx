import React, { useState, useCallback } from 'react';
import DotSlider from './components/DotSlider.tsx';
import Header from './components/Header.tsx';
import { applyDottedEffect } from './utils/dotEffect.ts';

const ChatGPTAdMaker = () => {
  const [image, setImage] = useState<string | null>(null);
  const [dotSize, setDotSize] = useState(1);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setProcessedImage(null); // Reset processed image when new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleProcessImage = async () => {
    if (image) {
      try {
        const result = await applyDottedEffect(image, dotSize);
        setProcessedImage(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 space-y-8">
            <div className="space-y-4">
              <label className="block text-center">
                <span className="text-xl font-semibold text-gray-900">Upload an image to process</span>
                <div className="mt-4 flex justify-center">
                  <div className="w-full max-w-lg">
                    <div
                      className={`relative flex flex-col items-center px-6 py-6 bg-white rounded-lg shadow-sm border-2 ${
                        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                      } border-dashed cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <div className="flex flex-col items-center text-center">
                          <span className="text-sm font-medium text-gray-600">ドラッグ＆ドロップ、または</span>
                          <span className="text-sm text-blue-500 hover:text-blue-600">ファイルを選択</span>
                        </div>
                        <span className="text-xs text-gray-500">対応フォーマット: PNG, JPG, GIF</span>
                      </div>
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {image && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Original Image</h3>
                    <div className="relative rounded-lg border bg-white/50 shadow-sm overflow-hidden" style={{ minHeight: '300px' }}>
                      <img
                        src={image}
                        alt="Original"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {processedImage && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Processed Image</h3>
                      <div className="relative rounded-lg border bg-white/50 shadow-sm overflow-hidden" style={{ minHeight: '300px' }}>
                        <img
                          src={processedImage}
                          alt="Processed"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Dot Size:</span>
                      <span className="text-sm font-medium text-gray-700">{dotSize}</span>
                    </div>
                    <div className="w-full">
                      <DotSlider
                        value={dotSize}
                        onChange={(value: number) => setDotSize(value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleProcessImage}
                      className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Apply Dotted Effect
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatGPTAdMaker;