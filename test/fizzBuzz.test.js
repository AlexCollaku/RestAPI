const fizzBuzz = require('../src/fizzBuzz.js');
const expect = require('chai').expect;

describe ("fizzBuzz test", () => {

    it("fizzBuzz", () => {

        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        expect(fizzBuzz(array)).to.equal([1, 2 , "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz"]);


    });
});