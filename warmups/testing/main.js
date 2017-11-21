function makeAbba(a, b) {
  return (a+b+b+a).split(" ").join("");
}
console.log(makeAbba("hi", "bye"))
module.exports = makeAbba;
