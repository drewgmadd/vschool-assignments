var isIpAdress = function(str) {
// var regIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//   if (str.length !== 15) {
//     return false;
//   } else if (str.match(regIp)) {
//     return true;
//   } else {
//     return false;
//   }
var arrOfNum = str.split('.');

   arrOfNum.filter(function(num){
      if( num <= 255 && num >= 0){
        return true;
      } else {
        return false;
      };
    })
}
console.log(isIpAdress("123..243.121"))


module.exports = isIpAdress;
