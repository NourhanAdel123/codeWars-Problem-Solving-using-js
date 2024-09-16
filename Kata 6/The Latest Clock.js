// The Latest Clock

// Description:
// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

// The time should be in HH:MM format.

// Examples:

// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
// Notes
// Result should be a valid 24-hour time, between 00:00 and 23:59.
// Only inputs which have valid answers are tested.

function latestClock(a, b, c, d) {
  const sortedArray = [a, b, c, d].sort((a, b) => b - a);
  const GreaterThan5 = sortedArray.filter((e) => e > 5).length;

  const GetMaxDigit = (maxDigit) => {
    for (let i = 0; i < sortedArray.length; i++) {
      const currDigit = sortedArray[i];
      if (currDigit <= maxDigit) {
        sortedArray.splice(i, 1); // Remove element
        return currDigit;
      }
    }
  };

  const firstDigit = GetMaxDigit(GreaterThan5 > 1 ? 1 : 2);
  const secondDigit = GetMaxDigit(firstDigit === 2 ? 3 : 9);
  const thirdDigit = GetMaxDigit(5);
  const fourthDigit = GetMaxDigit(9);

  return `${firstDigit}${secondDigit}:${thirdDigit}${fourthDigit}`;
}
