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
        isAnagram("anagram", "nagaram");

        expect(isAnagram("anagram", "nagaram")).to.equal('anagram');
    });

    it("verify Anagram with nagaram", () => {
        isAnagram("Anagram", "nagaram");

        expect(isAnagram("Anagram", "nagaram")).to.equal('not anagram');
    });

    it("verify anagramat with nagaram", () => {
        isAnagram("anagramat", "nagaram");

        expect(isAnagram("anagramat", "nagaram")).to.equal(`Strings have different length`);
    });

    it("verify rat with car", () => {
        isAnagram("rat", "car");

        expect(isAnagram("rat", "car")).to.equal('not anagram');
    });

    it("verify Rat with car", () => {
        isAnagram("Rat", "car");

        expect(isAnagram("Rat", "car")).to.equal('not anagram');
    });
});

