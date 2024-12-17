const numbers = [1, 2, 3, 4];

const defaultFilter = numbers.filter((item, index) => {
  return item > 2;
});

console.log("defaultFilter: ", defaultFilter);

Array.prototype.customFilter = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

const customFilter = numbers.customFilter((item, index) => {
  return item > 2;
});

console.log("customFilter: ", customFilter);
