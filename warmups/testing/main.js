function noTriples(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 1]  && arr[i] === arr[i + 2]) {
      return false;
    }
  }return true;
}
module.exports = noTriples;
