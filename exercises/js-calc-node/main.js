var ask = require("readline-sync");

var valueOne = Number(ask.question("Please enter your first number? "));
var valueTwo = Number(ask.question("Please enter your second number? "));

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

var options = ["Add", "Subtract", "Multiply", "Divide"];

var selectedAction = ask.keyInSelect(options, "What would you like to do?")

// if (selectedAction === 0) {
//   console.log(add(valueOne, valueTwo) + " is the sum.");
// } else if (selectedAction === 1) {
//   console.log(sub(valueOne, valueTwo) + " is the difference.");
// } else if (selectedAction === 2) {
//   console.log(multiply(valueOne, valueTwo) + " is the product.");
// } else if (selectedAction === 3) {
//   console.log(divide(valueOne, valueTwo) + " is the result.");
// }

switch (selectedAction) {
  case 0:
    console.log(add(valueOne, valueTwo) + " is the sum.");
    break;
  case 1:
    console.log(sub(valueOne, valueTwo) + " is the difference.");
    break;
  case 2:
    console.log(multiply(valueOne, valueTwo) + " is the product.");
    break;
  case 3:
    console.log(divide(valueOne, valueTwo) + " is the result.");
    break;
}


// console.log(selectedAction);
