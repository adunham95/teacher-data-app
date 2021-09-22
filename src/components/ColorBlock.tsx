import React from 'react';
import colors from '../functions/utils/colors.json';

interface ColorBlockType {
    colorData: {
        name: string,
        color: string,
        className: string
    },
    selectedColor: string,
    setColor: (color: string) => void,
}

export function getColorClassName(color: string, type: 'bg' | 'ring' | 'border'| 'text'): string {
  const selectedColor = colors.find((c) => c.name === color);
  // console.log(selectedColor);
  if (!selectedColor) {
    return color;
  }
  return selectedColor[type];
}

export function ColorBlock({ colorData: { name, color }, selectedColor, setColor }: ColorBlockType) {
  return (
    <button
      type="button"
      aria-label={`Color ${name}`}
      onClick={() => setColor(name)}
      className={`rounded-full w-8 h-8 m-1 ring-2 ring-offset-1 outline-none ${name === selectedColor ? getColorClassName(name, 'ring') : 'ring-transparent'}`}
      // style={setStyle()}
    >
      <span
        className={`h-full w-full rounded-full block ${getColorClassName(name, 'bg')}`}
      />
    </button>
  );
}
