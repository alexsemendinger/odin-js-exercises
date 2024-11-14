const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  return arr.reduce( (x, y) => x + y, 0);
};

const multiply = function(arr) {
  return arr.reduce( (x, y) => x * y, 1);
};

const power = function(a, b) {
  result = 1;
  for (let i = 0; i < b; i++) result *= a;
  return result;
};

const factorial = function(n) {
  result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
