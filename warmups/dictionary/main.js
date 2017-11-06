var dictionary = {};
var newWord = function(word, definition){
    dictionary = {
    [word]: definition
  }
}

var lookUp = function (word){
  if (dictionary[word] === undefined) {
    return null;
  }
  return dictionary[word];
}
newWord('cake','a tasty pastry');
console.log(lookUp('cake'));
module.exports = {
  newWord,
  lookUp
}
