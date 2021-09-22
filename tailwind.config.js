const colors = require('./data/colorData.json');

const colorObject = {};

colors.forEach((c) => {
  colorObject[c.className] = c.color;
});

module.exports = {
  purge: [],
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
