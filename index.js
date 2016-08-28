// combinations
var makeCombinations = function (stringOrArray, number, repetition) {
  if (!repetition) {
    // change str to arr
    var input = stringOrArray.constructor === String ? stringOrArray.split('') : stringOrArray;

    if (input.length === number) {
      return [input.join('')];
    } else if (number === 1) {
      return input;
    } else {
      var results = [];

      // set anchor
      input.forEach(function (char, index, arr) {
        var anchor = char;
        var subComb = makeCombinations(arr.slice(index + 1), number - 1, false);
        // var subComb = makeCombinations(arr, number - 1, false);

        // concat perm with anchor
        subComb.forEach(function (element) {
          results.push(anchor.concat(element));
        });
      });

      return results;
    }
  }
};

console.log(makeCombinations('abc', 2, false)); //[ 'ab', 'ac', 'bc' ]
console.log(makeCombinations('abc', 3, false)); //[ 'abc' ]
console.log(makeCombinations('abcd', 2, false)); //[ 'ab', 'ac', 'ad', 'bc', 'bd', 'cd' ]
console.log(makeCombinations('abcd', 3, false)); //[ 'abc', 'abd', 'acd', 'bcd' ]
