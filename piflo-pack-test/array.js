// sort an array
export const sort = (array) => {
  return Array.prototype.sort(array);
};

// return a random array index
export const randomIndex = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
