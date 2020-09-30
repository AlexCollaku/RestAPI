//         1. Given an array numbers, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:
// Try to:
// - Do this in-place without making a copy of the array
// - Minimize the total number of operations


const moveZerosToEnd = numbersArray => {

    if (numbersArray.length <= 0) {

        return "Array is empty";
    }

    for (i = 0; i < numbersArray.length; i++) {
        if (typeof numbersArray[i] !== 'number') {

            return "I can only work with numbers";
        }
    }


return numbersArray.filter(num => num !== 0).concat(numbersArray.filter(num => num === 0));

};

module.exports = moveZerosToEnd;