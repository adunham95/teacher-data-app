import React from 'react';

interface ColorBlockType {
    colorData: {
        name: string,
        color: string,
        className: string
    },
    selectedColor: string,
    setColor: (color: string) => void,
}

export function ColorBlock({ colorData: { name, color, className }, selectedColor, setColor }: ColorBlockType) {
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
      className="rounded-full w-8 h-8 m-1 border-2 border-solid outline-none"
      style={setStyle()}
    >
      <span
        className="h-full w-full rounded-full block"
        style={{
          backgroundColor: color,
        }}
      />
    </button>
  );
}
