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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
