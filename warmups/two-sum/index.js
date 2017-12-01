//Loop through each index of the aray checking each element against all others,
//not including itself, to look for sums of the target input

function twoSum(arr, int) {
    let numOne = arr[0];
    for (let j = 0; j < arr.length; j++) {
      let numTwo = arr[j];
      if (numOne + numTwo === int) {
        console.log([arr.indexOf(numOne), arr.indexOf(numTwo)])
      }
  }
}
 twoSum([1,2,3], 4)

 module.exports = twoSum;
