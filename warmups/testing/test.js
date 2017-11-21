const chai = require('chai');
const assert = chai.assert;
const makeAbba = require("./main");

describe('A function that given two strings 1 and 2 puts them in the order 1221', ()=>{
  it("Should return one string consisteing of the two input strings 1 and 2 ordered as 1221", ()=>{
    assert.equal(makeAbba("hi", "bye"), "hibyebyehi");
  })
})
