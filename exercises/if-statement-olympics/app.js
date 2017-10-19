if (5 > 3) {
  console.log('is greater than');
}
if ('cat'.length === 3) {
  console.log('is the length');
}
if ('cat' === 'dog') {
  console.log("something's not right");
} else {
  console.log('not the same');
}
var person = {
  name: "Bobby",
  age: 12
}
// if (person.age >= 18) {
//   console.log(person.name + ' is allowed to go to the movie');
// } else {
//   console.log(person.name + ' is NOT allowed to go to the movie')
// }
if (person.name[0] === 'B' && person.age >= 18) {
  console.log(person.name + ' is allowed to go to the movie');
} else {
  console.log(person.name + ' is NOT allowed to go to the movie');
}
if (1 === '1') {
  console.log('strict');
} else if (1 =='1') {
  console.log('loose');
} else {
  console.log('not equal at all');
}

if ((1 <= 2 && 2 === 4) || (3*4 >10) && (5 +10 > 10)){
  console.log('yes');
}
// if (typeof('dog') === 'string') {
//   console.log(true);
// }
typeof('dog') === 'string' ? console.log(true) : console.log(false);

if (typeof('true') === 'boolean') {
  console.log(true);
} else {
  console.log(false);
}
if (person) {
  console.log('variable exists');
}
// if ('A' < 100) {
//   console.log('its less');
// } else {
//   console.log('its larger');
// }
var num = 10;
switch (num) {
  case 1:
    console.log('one');
    break;
  case 2:
    num = 'two';
    break;
  case 3:
    num = 'three';
    break;
  case 4:
    num = 'four';
    break;
  case 5:
    num = 'five';
    break;
  case 6:
    num = 'six';
    break;
  case 7:
    num = 'seven';
    break;
  case 8:
    num = 'eight';
    break;
  case 9:
    num = 'nine'
    break;
  case 10:
    num = 'ten';
    break;
  default:
}
