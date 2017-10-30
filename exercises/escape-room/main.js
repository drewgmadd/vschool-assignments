var ask = require("readline-sync");

// ask.question("question?");

// var options = ask.keyInSelect(['Put hand in hole...', 'Find the key...', 'Open the door...']);

var doesHaveKey = false;

while (options !== 0) {
  var options = ask.keyInSelect(['Put hand in hole...', 'Find the key...', 'Open the door...']);
switch (options) {
  case 1:
  console.log('You now have a key.');
    doesHaveKey = true;
    break;
  case 2:
    if (doesHaveKey) {
      console.log('You win');
      break;
    }else {
    console.log('You do not have a key');
  }
  }
}
if (options === 0) {
  console.log('Game Over...');
}
