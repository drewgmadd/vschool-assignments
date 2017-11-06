var chai = require("chai");
var assert = chai.assert;
var isIpAdress = require("./main.js");


describe("A function to check if the input string is a valid IP address", function(){
  it("Should return true if the input string is a valid IP address", function(){
    assert.isTrue(isIpAdress("123.123.123.123"));
  });
  it("Should return false if the input string is not a valid IP address", function(){
    assert.isFalse(isIpAdress("123123123123"));
  });
  it("Should return false if sets of three digits are more than 255", function(){
    assert.isFalse(isIpAdress("300.400.555.678"));
  })
})
