function collectAnimals(...args) {
  return args;
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = {fruit, sweets, vegetables};
console.log(food);

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

//your code
// const { duration} = vacation;
// const {location } = vacation;
// console.log(`We're going to have a good time in ${location} for ${duration}`);

let items = ['first', 'second'];
const [firstItem] = items;
console.log(firstItem);

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [first, second, third] = favoriteActivitiesInOrder;

// your code

console.log(`My top three favorite activities are,${first}, ${second}", and ${third}`);

function combineAnimals(arrOne, arrTwo, arrThree) {
  return [...arrOne,...arrTwo,...arrThree];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


function product(...numbers) {

  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}

console.log(product(1,2,3,4))




function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
