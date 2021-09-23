const colors = require('./data/colorData.json');

const colorObject = {};
const safeColorList = [];

colors.forEach((c) => {
  colorObject[c.className] = c.color;
  safeColorList.push(`bg-${c.className}`);
  safeColorList.push(`ring-${c.className}`);
  safeColorList.push(`border-${c.className}`);
  safeColorList.push(`text-${c.className}`);
});

console.log(safeColorList);

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.tsx',
      './src/**/*.jsx',
    ],
    safelist: [
      'bg-customRed',
      ...safeColorList,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colorObject,
      },
      maxHeight: {
        'half-screen': '50vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
