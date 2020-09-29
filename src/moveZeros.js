const numbers = [0, 1, 0, 3, 12];

function isZero(num) {
    
    return num === 0;
}

const newArray = numbers.filter(isZero);
console.log(newArray);

function isNotZero(numb) {

    return numb !== 0;
}

const array = numbers.filter(isNotZero);
console.log(array);

const finalArray = array.concat(newArray);
console.log(finalArray);