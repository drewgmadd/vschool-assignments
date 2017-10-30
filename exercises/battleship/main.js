var ask = require("readline-sync");

var randBoatLength = Math.ceil(Math.random() * 5);

var isBoatVertical = Math.random >= 0.5;



function Location(isShip, hit) {
  this.isShip = isShip;
  this.hit = hit;
}
function randomBoolean() {
  var num = Math.floor(Math.random() * 11);
  if (num > 8) {
    return true;
  } else {
    return false;
  }
}
// console.log(randomBoolean())

var battleGrid = [];

for (var i = 0; i < 10; i++){
  battleGrid.push([]);
    for (var j = 0; j < 10; j++) {
      battleGrid[i].push(new Location(randomBoolean(), false));
    }
}
var topRow =['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J'];
var sideColumn = [1,2,3,4,5,6,7,8,9,10];
var hitCount = 0;
var missCount = 0;
var displayArr = [];
for (var x = 0; x < 10; x++) {
  displayArr.push([]);
  for (var y = 0; y < 10; y++) {
    displayArr[x].push('~');
  }
}
// console.log(displayArr);
while (hitCount < 3 && missCount < 20) {
  var horizPick = ask.keyInSelect(topRow, 'Pick your lettered column');
  var vertPick = ask.keyInSelect(sideColumn, 'Pick your numbered row');
  // displayArr[horizPick][vertpick]
  if (battleGrid[horizPick][vertPick].isShip === true && battleGrid[horizPick][vertPick].hit === false) {
    hitCount++;
    console.log('HIT ' + hitCount);
    battleGrid[horizPick][vertPick].hit = true;
    displayArr[horizPick][vertPick] = "H";
    console.log(displayArr);
  } else if (battleGrid[horizPick][vertPick].isShip === false && battleGrid[horizPick][vertPick].hit === false){
    missCount++;
    console.log('Miss ' + missCount);
    battleGrid[horizPick][vertPick].hit = true;
    displayArr[horizPick][vertPick] = "M";
    console.log(displayArr);
  } else {
  console.log('You already guessed that position');
}
}

if (hitCount >= 3) {
  console.log('You Win!');
}
if (missCount >= 20) {
  console.log('You Lose');
}

console.log(missCount)
