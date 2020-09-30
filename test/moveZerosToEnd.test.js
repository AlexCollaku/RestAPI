//         1. Given an array numbers, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:
// Try to:
// - Do this in-place without making a copy of the array
// - Minimize the total number of operations

const moveZerosToEnd = require('../src/moveZerosToEnd.js');
const expect = require('chai').expect;

describe ("Move all 0's to the end of the array", () => {

    it("verify input is [0, 1, 0, 3, 12] and output is [1, 3, 12, 0, 0]", () => {

        const numbers = [0, 1, 0, 3, 12];

        expect(moveZerosToEnd(numbers)).to.equal([1, 3, 12, 0, 0]);
     })

     it("verify input is [0, -1, 0, 3, -15] and output is [-15, -1, 3, 0, 0]", () => {

        const numbers = [0, -1, 0, 3, -15];

        expect(moveZerosToEnd(numbers)).to.equal([-15, -1, 3, 0, 0]);
     })
})
