// 2. Write a function that takes two strings (say s and t) and determines if one string is an anagram of another.
// For example:
// Input: s = "anagram", t = "nagaram" // Output: true
// Input: s = "rat", t = "car" // Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

const anagram = require('../src/anagram.js');
const expect = require('chai').expect;

describe ("Determines if one string is an anagram of another", () => {

    it("verify anagram with nagaram", () => {
        anagram("anagram", "nagaram");

        expect(anagram("anagram", "nagaram")).to.equal('anagram');
    });

    it("verify Anagram with nagaram", () => {
        anagram("Anagram", "nagaram");

        expect(anagram("Anagram", "nagaram")).to.equal('not anagram');
    });

    it("verify rat with car", () => {
        anagram("rat", "car");

        expect(anagram("rat", "car")).to.equal('not anagram');
    });

    it("verify Rat with car", () => {
        anagram("Rat", "car");

        expect(anagram("Rat", "car")).to.equal('not anagram');
    });
});



// I don't know why I can't use .toLowerCase()

