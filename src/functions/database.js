function LocalDBException() {
  this.message = 'No Database Selection';
  this.toString = () => this.message;
}

export function saveToLocal(name = '', data) {
  if (name === '') { throw new LocalDBException(name); }
  localStorage.setItem(name, JSON.stringify(data));
}

export function getFromLocal(name) {
  if (name === '') { throw new LocalDBException(name); }
  let localData = JSON.parse(localStorage.getItem(name));
  if (localData === null) {
    localData = [];
    // eslint-disable-next-line no-console
    console.warn(`${name} is a not a database. Creating new instance`);
  }
  return localData;
}
