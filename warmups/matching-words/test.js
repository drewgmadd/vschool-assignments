var chai = require("chai");
var assert = chai.assert;
var repeatedArr = require("./main.js");

describe("A function that returns one instance of all repeated words in a string put into an array", () => {
  it("Should return an array with one instance of all repeated words from a string into an array", () => {
    assert.deepEqual(repeatedArr("This is the first string I will test this string that is the."), ["this", "is", "the", "string"]);
  });
  it ("Should return and empty array if there are no repeated words", () => {
    assert.deepEqual(repeatedArr("Here is a string without any repeated words"), []);
  });
  it ("Should only return one instance of repeated words", () => {
    assert.deepEqual(repeatedArr("String other string and one more string"), ["string"]);
  });
})
