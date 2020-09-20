const fahrenheitToCelsius = (tempF) => {

    if (typeof tempF !== "number") {
        
        return console.log("I can work only with numbers");
    }

    let tempC = Math.floor(tempF - 32) * 5 / 9;
    
    return tempC;}
    
 module.exports = fahrenheitToCelsius;