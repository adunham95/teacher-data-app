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

export function getColorClassName(color: string, type: 'bg' | 'ring' | 'border'): string {
  const selectedColor = colors.find((c) => c.color === color);
  console.log(selectedColor);
  if (!selectedColor) {
    return color;
  }
  return selectedColor[type];
}

export function ColorBlock({ colorData: { name, color }, selectedColor, setColor }: ColorBlockType) {
  function setStyle() {
    if (color === selectedColor) {
      return {
        padding: '1px', borderColor: color, outlineColor: 'transparent',

      };
    }
    return {
      padding: '1px', borderColor: 'transparent', outlineColor: 'transparent',
    };
  }
  return (
    <button
      type="button"
      aria-label={`Color ${name}`}
      onClick={() => setColor(color)}
      className={`rounded-full w-8 h-8 m-1 ring-2 ring-offset-1 outline-none ${color === selectedColor ? getColorClassName(color, 'ring') : 'ring-transparent'}`}
      // style={setStyle()}
    >
      <span
        className={`h-full w-full rounded-full block ${getColorClassName(color, 'bg')}`}
      />
    </button>
  );
}
