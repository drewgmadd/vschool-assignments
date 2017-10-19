// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (var i = 9; i >= 0; i--) {
//   console.log(i);
// }
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// for (var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
// var array = [];
// for (var i = 0; i < 10; i++) {
//   array.push(i);
// }
// console.log(array);
// for (var i = 0; i < 101; i += 2) {
//   console.log(i);
// }
// var newFruits = [];
// for (var i = 0; i < fruit.length; i +=2) {
//   newFruits.push(fruit[i]);
// }
// console.log(newFruits);
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// for (var i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name);
// }
var names = [];
var occupations =[];
// for (var i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i].name);
//   occupations.push(peopleArray[i].occupation);
// // }
// console.log(names);
// console.log(occupations);
for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    names.push(peopleArray[i].name);
    continue;
  }
  if (i % 2 !== 0) {
    occupations.push(peopleArray[i].occupation);
    continue;
  }
}
// for (var i = 0; i < peopleArray.length; i++) {
//   if (i % 2 !== 0) {
//     occupations.push(peopleArray[i].occupation);
//     continue;
//   }
// }

console.log(names);
console.log(occupations);
var zeroGrid = [];
for (var i = 0; i < 3; i++) {
  zeroGrid.push([0,0,0]);
}
console.log(zeroGrid);

var increaseGrid =[];
for (var i = 0; i < 3; i++) {
  increaseGrid.push([i, i, i])
}
console.log(increaseGrid);

var multiGrid = [];
for (var i = 0; i < 3; i++) {
  multiGrid.push([0,1,2]);
}
console.log(multiGrid);
