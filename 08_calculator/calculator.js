const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  let sum = 0
	for (let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {
  let product = array[0]
	for (let i = 1; i < array.length; i++){
    product *= array[i]
  }
  return product
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let result = num;
  if (num == 0){
    return 1
  } else {
    for (i = num-1; i >= 1; i--){
      result *= i
    }
  }
  return result
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
