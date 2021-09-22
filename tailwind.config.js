const colors = require('./data/colorData.json');

const colorObject = {};

colors.forEach((c) => {
  colorObject[c.className] = c.color;
});

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
  ],
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
