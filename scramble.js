// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered


function scramble(str1, str2) {
arr1 = str1.split("") // the scramble
arr2 = str2.split("") // the word

// return true if all elements of the word array
// are present in the scramble array
result = arr2.every(element =>
  arr1.indexOf(element) !== -1
)
return result
}
