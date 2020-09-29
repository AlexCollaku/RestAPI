let anagram = (s, t) => {

    if (typeof s !== "string" && typeof t !== "string") {
        
        return console.log("I can work only with strings");
    }

    // s.toLowerCase();
    // t.toLowerCase();

    let result = '';

    if (s.split("").sort().join() === t.split("").sort().join()) {

        console.log(`${s} is anagram with ${t}`);
        result = 'anagram';

    } else {
        console.log(`${s} is not anagram with ${t}`);
        result = 'not anagram';
    }

    return result;
};

module.exports = anagram;

// I don't know why I can't use .toLowerCase()