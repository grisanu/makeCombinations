'use strict';

// combinations
var makeCombinations = function (stringOrArray, number, repetition) {
  if (stringOrArray.constructor !== String && stringOrArray.constructor !== Array) {
    throw new Error('Collection must either be a String or an Array');
  }
  if (!Number.isInteger(number)) { throw new Error('Selection size must be an integer'); }
  if (number <= 0 || number > stringOrArray.length) { return []; }

  repetition = repetition || false;
  if (repetition.constructor !== Boolean) { throw new Error('Repetition must be a boolean value'); }

  /**
  * Code
  */

  // change str to arr
  var input = stringOrArray.constructor === String ? stringOrArray.split('') : stringOrArray;
  // make each element into str
  input = input.map((element) => { return element.toString(); });

  if (input.length === number) {
    return [input.join('')];
  } else if (number === 1) {
    return input;
  } else {
    var results = [];

    // set anchor
    input.forEach(function (char, index, arr) {
      var anchor = char;
      var subComb;
      var subArr;

      if (!repetition) {
        subArr = arr.slice(index + 1);
      } else {
        subArr = arr;
      }

      subComb = makeCombinations(subArr, number - 1, repetition);

      // concat perm with anchor => different when repetition === true
      subComb.forEach(function (element) {
        results.push(anchor.concat(element));
      });
    });

    return results;
  }
};

// console.log(makeCombinations('abc', 2, false)); //[ 'ab', 'ac', 'bc' ]
// console.log(makeCombinations('abc', 3, false)); //[ 'abc' ]
// console.log(makeCombinations('abcd', 2, false)); //[ 'ab', 'ac', 'ad', 'bc', 'bd', 'cd' ]
// console.log(makeCombinations('abcd', 3, false)); //[ 'abc', 'abd', 'acd', 'bcd' ]

console.log(makeCombinations([1,2,3,4,5,-1,-4,6,-5,2,2], 4));
