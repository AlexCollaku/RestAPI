const fahrenheitToCelsius = require('../src/fahrenheitToCelsius.js');
const expect = require('chai').expect;

describe ("Converting temperature from fahrenheit to Celsius", () => {

    it("verify 100°F is 37°C", () => {
        fahrenheitToCelsius(100);
        
        expect(fahrenheitToCelsius(100)).to.equal(37);
        //expect(fahrenheitToCelsius(100)).to.equal(22);
    });

    it("verify 77°F is 25°C", () => {
        fahrenheitToCelsius(77);
        
        expect(fahrenheitToCelsius(77)).to.equal(25);
    });

    it("verify 32°F is 0°C", () => {
        fahrenheitToCelsius(32);
        
        expect(fahrenheitToCelsius(32)).to.equal(0);
    });

    it("verify 20°F is -6°C", () => {
        fahrenheitToCelsius(20);
        
        expect(fahrenheitToCelsius(32)).to.equal(-6);
    });
});