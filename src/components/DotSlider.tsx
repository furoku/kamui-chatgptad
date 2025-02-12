interface DotSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const DotSlider: React.FC<DotSliderProps> = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="1"
      max="20"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
  );
};

export default DotSlider; 