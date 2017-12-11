let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
}
console.log(stringifyUrl(endpoint, query));

function stringifyUrl(url, queries){
  let propNames = (Object.getOwnPropertyNames(queries));
  let queryStrings = propNames.map(propName=>{
    return propName+"="+queries[propName];
  });
  return url+queryStrings.join("&");
}

let someUrl = "http://localhost:8080/monkeys?color=black&species=howler&age=10&cansign=true"

function extractQueries(url) {
  querySet = {};
  let queries = url.slice(url.indexOf("?")+1, url.length);
  let queriesArr = queries.split("&");
  queriesArr.map(singleQuery=>{
    switch(singleQuery.split("=")[1]) {
      case !isNaN:
        querySet[singleQuery.split("=")[0]] = Number(singleQuery.split("="[1]));
      case "true":
        querySet[singleQuery.split("=")[0]] = true;
      case "false":
        querySet[singleQuery.split("=")[0]] = false;
      default:
        querySet[singleQuery.split("=")[0]] = singleQuery.split("=")[1]
    }
  })
  return querySet;
}

console.log(extractQueries(someUrl));
