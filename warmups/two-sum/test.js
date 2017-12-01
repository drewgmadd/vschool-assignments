const chai = require("chai");
const assert = chai.assert;
const twoSum = require("./index.js");

describe("A function that, given an array and an integer returns the indeces of
the first two items in the array whose sum is the input integer", () => {
  it("Should return the indeces of the first two items whose sum is the input integer", () => {
    assert.equal(twoSum([1,2,3], 4), [0, 2]);
  })
})
