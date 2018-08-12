// You are given a string s. Every letter in s appears once.
//
// Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)
//
// Example
// For s = "abc", the result should be "bac".
//
// The permutations in order are:
// "abc", "acb", "bac", "bca", "cab", "cba"
// So, The middle term is "bac".

// https://initjs.org/all-permutations-of-a-set-f1be174c79f8
// function getAllPermutations(string) {
//   var results = [];
//
//   if (string.length === 1) {
//     results.push(string);
//     return results;
//   }
//
//   for (var i = 0; i < string.length; i++) {
//     var firstChar = string[i];
//     var charsLeft = string.substring(0, i) + string.substring(i + 1);
//     var innerPermutations = getAllPermutations(charsLeft);
//     for (var j = 0; j < innerPermutations.length; j++) {
//       results.push(firstChar + innerPermutations[j]);
//     }
//   }
//   return results;
// }

// https://www.w3schools.com/jsref/jsref_substring.asp
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string

function middlePermutation(s) {

    let results = []

    if (s.length === 1) {
      results.push(s);
      return results;
    }

    for (let i = 0; i < s.length; i++) {
      let firstChar = s[i]
      console.log(`firstChar is ${firstChar}`)
      let charsLeft = s.substring(0, i) + s.substring(i + 1);
      console.log(`charsLeft is ${charsLeft}`)
      let innerPermutations = middlePermutation(charsLeft);
      console.log(`innerPermutations is ${innerPermutations}`)

      for (let j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }

     console.log(results)
}

middlePermutation('abc')
