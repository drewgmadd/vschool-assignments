var stringOne = 'this is the first string';
var stringTwo = 'AnD here Is AnOtHer';

var changeToUpper = function(str) {
  return str.toUpperCase();
}
console.log(changeToUpper(stringOne));

function changeEnd(str) {
  return str.replace(str.substr(str.length - 6, 6), "pickler");
}
console.log(changeEnd(stringOne));

var putStringsTogether = function(str, str2) {
  return str.concat(" ", str2);
}
console.log(putStringsTogether(stringOne, stringTwo))

function getFirstHalf(str) {
  return str.slice(0, str.length/2);
}
console.log(getFirstHalf(stringTwo))


function halfAndHalf(str) {
  var firstHalf = str.substring(0, str.length/2).toUpperCase();
  var secondHalf = str.substring(str.length/2, str.length).toLowerCase();
   return  firstHalf.concat(secondHalf);
}
console.log(halfAndHalf(stringTwo));

var stringToArrayOfWords = function(str) {
  return str.split(' ');
}
console.log(stringToArrayOfWords(stringOne))
