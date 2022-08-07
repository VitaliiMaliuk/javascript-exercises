const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(ch1, ch2) {
	return ch1 - ch2;
};

const sum = function(arr) {
  const sumResult = arr.reduce((prev, curr) => prev + curr, 0);
  return sumResult;
};

const multiply = function(array) {
  const mulResult = array.reduce((prev, curr) => prev * curr, 1);
  return mulResult;
};

const power = function(number, pwr) {
	return number ** pwr;
};

const factorial = function(arg) {
	let result = arg;
  if (arg === 0 || arg === 1) {
    return 1;
  }
  while (arg > 1) {
    arg--;
    result *= arg;
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
