var chai = require("chai");
var assert = chai.assert;
var newWord = require('./main.js').newWord;
var lookUp = require('./main.js').lookUp;
describe("A dictionary to add and look up words", function(){
  it("Should store the word when added", function(){
    newWord('cake', 'a tasty pastry');
    assert.equal(lookUp('cake'), 'a tasty pastry')
  });
  it("Should return null when we lookup a word not present", function(){
    assert.isNull(lookUp("pear"));
  });
})
