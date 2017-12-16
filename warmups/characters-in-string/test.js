const chai = require("chai");
const assert = chai.assert;
const charFreq = require("./index.js");

describe("A function that given a string as an input return an object with the number of each occurence of a charcter as the value to the lowercase character", ()=>{
  it("Should return an object of lowercased letters with number of their occurences as their value", ()=>{
    assert.deepEqual(charFreq("Ceres"), { c: 1, e: 2, r: 1, s: 1 })
  })
})
