function printName(name) {
  console.log(name)
}
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
var largest = function(num1, num2, num3) {
  // if (num1 > num2 && num1 > num3){
  //   return num1;
  // } else if (num2 > num1 && num2 > num3) {
  //   return num2;
  // } else if (num3 > num1 && num3 > num2) {
  //   return num3;
  // }
  return Math.max(num1, num2, num3);
}
console.log(largest(3,4,9));


function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "The number is even"
  } else {
    return "The number is odd"
  }
}

var changeString = function(str) {
  if (str.length <= 20) {
    return str + str;
  } else {
    return str.substring(0, str.length/2);
  }
}
console.log(changeString('thisstrin'))


// HOW?! 
// function fibbo(n) {
//   for (var i = 0; i < n; i++){
//
//   }
// }
// var quad = function(num1, num2, num3) {
//   return ()
// }
