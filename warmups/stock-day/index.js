// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
//
// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

function getMaxProfit(arr) {
  let profitArr = [];
  let differences = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1]-arr[i] > 0) {
      differences.push(arr[i+1]-arr[i]);
    }
  }
  console.log(differences.reduce((a,b)=>{
    return a+b;
  }));
}

getMaxProfit([10, 2, 5, 8, 11, 9])
