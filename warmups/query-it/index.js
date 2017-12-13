// example:
let database = [
{a: 1, b: 1, c: 2},
{a: 0, b: 0, c: 2},
{a: 0, b: 1, c: 0},
{a: 1, b: 2, c: 2}
];
let obj = {a: 1, c: 2};
//
// filterDatabase({}, database);
//   //returns entire database array
//
// filterDatabase({dolphin: "squeak!"});
//   //returns empty array
//
// filterDatabase({a: 1, c: 2});
//   //returns
// [
//   {a: 1, b: 1, c: 2},
//   {a: 1, b: 2, c: 2}
// ]


function filterDatabase(query, objArr) {
  let keys =  Object.keys(query[0]);
  let keysOfObjArr = Object.keys(objArr);
  let matchingKeys = []
  for (let i = 0; i < keysOfObjArr.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (keysOfObjArr[i] === keys[j]) {
        matchingKeys.push(keysOfObjArr[i]);
      }
    }
  }
  let finalObj = {}
  for (let x = 0; x < matchingKeys.length; x++) {
    for (let z = 0; z < query.length; z++) {
      if (objArr[matchingKeys[x]] === query[z][matchingKeys[x]]) {
        finalObj[matchingKeys[x]] = query[z][matchingKeys[x]];
        console.log(finalObj.hasOwnProperty(matchingKeys[x], matchingKeys[x+1]), "hasownprop")
        console.log(query[])
      } else {
        console.log(false)
      }
    }
  }
  console.log(matchingKeys)
}

filterDatabase(database, obj)
