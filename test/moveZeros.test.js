//         1. Given an array numbers, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:
// Try to:
// - Do this in-place without making a copy of the array
// - Minimize the total number of operations

const numbers = [0, 1, 0, 3, 12];

function isZero(num) {
    
    return num === 0;
}

const onlyZero = numbers.filter(isZero);
console.log(onlyZero);

function isNotZero(numb) {

    return numb !== 0;
}

const noZero = numbers.filter(isNotZero);
console.log(noZero);

const finalArray = noZero.concat(onlyZero);
console.log(finalArray);