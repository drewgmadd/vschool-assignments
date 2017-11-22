const chai = require('chai');
const assert = chai.assert;
const noTriples = require("./main.js");

describe('A function that takes an array of integers and returns true if there are three of same integer in a row', ()=>{
          it('Should return true if there are three equal consecutive integer in the input array', ()=>{
            assert.equal(noTriples([1, 2, 2, 3]), true);
          })
        })
