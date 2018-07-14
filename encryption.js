
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
arr = test.split("")

function encrypt(text, n) {

secondsFilter = function(elem, index, arr) {
  return (index % 2 !== 0)
}
oldFilter = function(elem, index, arr) {
  return (index % 2 === 0)
}

for (let i = 0; i < n; i++) {
arr = text.split("")
seconds = arr.filter(secondsFilter).join("")
old = arr.filter(oldFilter).join("")
}
resultString = seconds + old
return resultString
}


function decrypt(encryptedText, n) {

}
