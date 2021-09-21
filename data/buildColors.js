const fs = require('fs');
const path = require('path');

const colors = require('./colorData.json');

const jsonPath = path.join(__dirname, '../src/functions/utils/colors.json');

const colorData = colors.map((c) => ({
  ...c,
  bg: `bg-${c.className}`,
  ring: `ring-${c.className}`,
  border: `border-${c.className}`,
  text: `text-${c.className}`,
}));

console.log(colorData);

try {
  const data = fs.writeFileSync(jsonPath, JSON.stringify(colorData));
  // file written successfully
} catch (err) {
  console.error(err);
}
