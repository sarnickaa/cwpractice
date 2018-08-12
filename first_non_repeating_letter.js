// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return the empty string ("").
firstNonRepeatingLetter('moonmen')

// TODO - handle empty strings
// TODO - repeating strings (maybe unicode characters?)
// TODO - handle letter cases on return

function firstNonRepeatingLetter(s) {

  if (s === "") {
    return ""
  }

  let sArr = s.toLowerCase().split("")
  console.log(sArr)
  let result = {}
  let singleKeys = []
  let other = []

  if (sArr.length === 1) {
    return sArr[0]
  }

  for (i = 0; i < sArr.length; i++) {
    if (!result[sArr[i]])
      result[sArr[i]] = 0
      result[sArr[i]]++
  }
  if (Object.keys(result).length === 1) {
    return ""
    }

  for (key in result) {
    if (result[key] === 1) {
      singleKeys.push(key)
    } else {
    other.push(key)
    }
  }

  if (singleKeys.length === 0) {
  return ""
  }

  if (s.split("").indexOf(singleKeys[0]) === -1) {
  console.log(s)
  console.log(singleKeys)
  console.log(singleKeys[0])
    return singleKeys[0].toUpperCase()
  }
  return singleKeys[0]
}
