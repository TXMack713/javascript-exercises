const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...entry) {
  let total = 0;
	for (let i = 0; i <= entry.length; i++) {
    total += entry[i];
  }
  return total;
};

const multiply = function(...nums) {
  let total = 1;
  if (nums.length >= 2) {
    for (let i = 0; i <= nums.length; i++) {
      total *= nums[i];
    }
    return total;
  }
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let total = 1;
  if (num < 0) {
    return 'ERROR';
  } else if (num == 0) {
    return 1;
  } else if (num > 0) {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
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
