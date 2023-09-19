const add = function(a, b) {
  return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(arr) {
  let s = 0;
  for(let i=0; i<arr.length; i++) {
    s+=arr[i];
  }
  return s;
};

const multiply = function(arr) {
  let m = 1;
  for(let i=0; i<arr.length; i++) {
    m*=arr[i];
  }
  return m;
};

const power = function(num, pow) {
  let m =1;
  for(let i=1; i<=pow; i++) {
    m*=num;
  }
  return m;
};

const factorial = function(num) {
	let m=1;
  for(let i=1; i<=num; i++) {
    m*=i;
  }
  return m;
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
