const fizzBuzz = require('../src/fizzBuzz.js');
const expect = require('chai').expect;

describe ("fizzBuzz test", () => {

    it("fizzBuzz", () => {
        fizzBuzz(30);
    });
});