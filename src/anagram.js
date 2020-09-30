// 2. Write a function that takes two strings (say s and t) and determines if one string is an anagram of another.
// For example:
// Input: s = "anagram", t = "nagaram" // Output: true
// Input: s = "rat", t = "car" // Output: false
// Note:
// You may assume the string contains only lowercase alphabets.


let isAnagram = (string1, string2) => {


    if (typeof string1 !== "string" && typeof string2 !== "string") {
        
        return "I can work only with strings";
    }

    if (string1.length !== string2.length) {

        return `Strings have different length`;

    }

     string1.toLowerCase();
     string2.toLowerCase();

    let result = '';

    if (string1.split("").sort().join() === string2.split("").sort().join()) {

        // console.log(`${string1} is anagram with ${string2}`);
        result = 'anagram';

    } else {
        // console.log(`${string1} is not anagram with ${string2}`);
        result = 'not anagram';
    }

    return result;
};

module.exports = isAnagram;