var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
//console.log(vegetables);
fruit.shift();
//console.log(fruit);
fruit.indexOf('orange');
fruit.push(fruit.indexOf('orange'));
//console.log(vegetables.length);
vegetables.push(vegetables.length);
//console.log(vegetables);
var food = fruit.concat(vegetables);
//console.log(food);
food.splice(4, 2);
//console.log(food);
food.reverse();

console.log(food.join());
