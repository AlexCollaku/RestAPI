// 3. Write a function that takes in an array of receipt totals (integers) and returns an array of 
// the same totals with added sales tax % (use your local tax %). Format the numbers in 
// the resulting array to have 2 digits after decimal point (i.e. 12.23456 > 12.23) and make sure 
// your array values are still numbers. Use .map() method when necessary.
// For example: [342, 1002, 523] should become [371.92, 1089.67, 568.76], given the tax of 8.875%.


const addTax = require('../src/addTax.js');
const expect = require('chai').expect;

describe ("Adding tax to the receipt", () => {

    it("verify [342, 1002, 523] it will be [371.92, 1089.67, 568.76]", () => {

        let arrayReceipts = [342, 1002, 523];

        expect(addTax(arrayReceipts)).to.equal([371.92, 1089.67, 568.76]);

    })

    it("verify when add tax in this array [-342, 0, 523]", () => {

        let arrayReceipts = [-342, 0, 523];

        expect(addTax(arrayReceipts)).to.equal("I can't work with 0 and negative numbers");

    })
})