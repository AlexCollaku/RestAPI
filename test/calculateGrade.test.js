const calculateGrade = require('../src/calculateGrade.js');
const expect = require('chai').expect;

describe("Calculate Grade test", () =>{

    it("Calculate 100, 100", () => {
        calculateGrade(100,100);

        expect(calculateGrade(100, 100).to.equal('A'));
    });

    it("Calculate 88, 100", () => {
        calculateGrade(88,100);

        expect(calculateGrade(88, 100).to.equal('B'));
    });

    it("Calculate 77, 100", () => {
        calculateGrade(77,100);

        expect(calculateGrade(77, 100).to.equal('C'));
    });

    it("Calculate 66, 100", () => {
        calculateGrade(66,100);

        expect(calculateGrade(66, 100).to.equal('D'));
    });

    it("Calculate 53, 100", () => {
        calculateGrade(53,100);

        expect(calculateGrade(53, 100).to.equal('F'));
    });
});