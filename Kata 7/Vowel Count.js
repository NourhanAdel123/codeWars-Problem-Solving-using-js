// Vowel Count

// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Solution:

function getCount(str) {
  let vowels = "aeiou";
  return str
    .replace(" ", "")
    .split("")
    .filter((letter) => vowels.includes(letter)).length;
}
