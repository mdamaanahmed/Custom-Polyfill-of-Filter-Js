const numbers = [1, 2, 3, 4];

const defaultMap = numbers.filter((item, index) => {
  return item > 2;
});

console.log("defaultMap: ", defaultMap);

Array.prototype.customFilter = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

const customMap = numbers.customFilter((item, index) => {
  return item > 2;
});

console.log("customMap: ", customMap);
