import React from 'react';

const DotSlider = ({ value, onChange }) => {
  return (
    <div>
      <label>Dot Size: {value}</label>
      <input
        type="range"
        min="1"
        max="20"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export default DotSlider;