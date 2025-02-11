import React from 'react';

interface DotSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const DotSlider: React.FC<DotSliderProps> = ({ value, onChange }) => {
  // 内部的な値を0-19にマッピング
  const internalValue = value - 1;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 内部値を1-20にマッピング
    onChange(Number(e.target.value) + 1);
  };

  return (
    <div className="w-full">
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: #3b82f6;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
            border: 2px solid white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          
          input[type="range"]::-webkit-slider-thumb:hover {
            background: #2563eb;
            transform: scale(1.1);
          }
          
          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: #3b82f6;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
            border: 2px solid white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          
          input[type="range"]::-moz-range-thumb:hover {
            background: #2563eb;
            transform: scale(1.1);
          }
        `}
      </style>
      <input
        type="range"
        min="0"
        max="19"
        value={internalValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(internalValue / 19) * 100}%, #e5e7eb ${(internalValue / 19) * 100}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
};

export default DotSlider;