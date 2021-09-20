/* eslint-disable no-bitwise */
function newID(length) {
  return [...Array(length)].map((i) => (~~(Math.random() * 36)).toString(36)).join('');
}

export function generateID(length = 4) {
  const id = newID(length);
  // TODO check for current value
  return id;
}
