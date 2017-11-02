// var add = function (a, b){
//     // return a + b === 4;
//     if (a +b === 4) {
//       return true;
//     } else {
//       return false;
//     }
// }
//
// module.exports = add;
var palindrome = function(str) {
  var removeChar = /[\W_]/g;
  var charRemoved = str.replace(removeChar, '');
  var split = charRemoved.split('').reverse().join('');
  // console.log(charRemoved);
  // var reversedStr = split.join('');
  if (split.toLowerCase() === charRemoved.toLowerCase()){
    return true;
  } else {
    return false;
  }
}

palindrome("tAcO! Cat!");
module.exports = palindrome;
