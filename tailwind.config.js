const colors = require('./src/functions/utils/colors.json');

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

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
