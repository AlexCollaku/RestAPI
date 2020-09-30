let fizzBuzz = (numArray) => {

    for (i = 0; i <= numArray.length; i++) {

    if (typeof numArray[i] !== 'number') {

        return "I can only work with numbers";

    } else if (numArray[i] <= 0) {

        return "Please provide a number more than 0";
    }
}

    let fizzBuzzArray = [];

    for (i = 0; i <= numArray.length; i++) {
        if (numArray[i] % 5 === 0 && numArray[i] % 3 === 0) {
            fizzBuzzArray.push("FizzBuzz");
        
        } else if (numArray[i] % 5 === 0) {
            fizzBuzzArray.push("Buzz");
        
        } else if (numArray[i] % 3 === 0) {
            fizzBuzzArray.push("Fizz");
        
        } else {
            fizzBuzzArray.push(numArray[i]);
        }
    }
    return fizzBuzzArray;
};
module.exports = fizzBuzz;