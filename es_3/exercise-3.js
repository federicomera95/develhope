const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}

const arrow = (num1,num2,num3) => {
  log(divide(subtract(multiply(sum(num1,num2),sum(num3,num1)),num1),num3));
}

arrow(2,4,5)