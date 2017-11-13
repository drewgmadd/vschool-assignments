var repeatedArr = function(str){
  var holder = [];
  let splitStr = str.split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    var temp = splitStr[i];
    for (var j = i; j < splitStr.length; j++) {
     if (holder.includes(temp)) {
       break;
     } else if (temp === splitStr[j + 1]) {
       holder.push(temp);
     }
   }
  } return holder;
}
module.exports = repeatedArr;
