// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.
//
// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty


let test = "This is a test!"
arr = test.split("") // splits string into characters

function encrypt(text, n) {
  input = text


  secondsFilter = function(elem, index, arr) {
    return (index % 2 !== 0)
  }
  // creates a new array: every odd index (every 2nd elem) pushed into seconds array

  oldFilter = function(elem, index, arr) {
    return (index % 2 === 0)
  }
  // creates a new array: every even index (starting at 0) pushed into olds array


  for (let h = 0; h < n; h++) {
    arr = input.split("")
    for (let i = 0; i < arr.length; i++) {
      // arr = input.split("")
      seconds = arr.filter(secondsFilter).join("")
      old = arr.filter(oldFilter).join("")
    }
    input = seconds + old
  }
  return input
}

function decrypt(encryptedText, n) {
  input = encryptedText

  secondsFilter = function(elem, index, arr) {
    return (index % 2 !== 0)
  }
  oldFilter = function(elem, index, arr) {
    return (index % 2 === 0)
  }

  for (let h = 0; h < n; h++) {
    arr = input.split("")
    for (let i = 0; i < arr.length; i++) {
      // arr = input.split("")
      seconds = arr.filter(secondsFilter).join("")
      old = arr.filter(oldFilter).join("")
    }
    input = seconds + old
  }
  return input
}
