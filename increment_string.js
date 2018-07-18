// Your job is to write a function which increments a string,
// to create a new string.
// If the string already ends with a number,
// the number should be incremented by 1.
// If the string does not end with a number
// the number 1 should be appended to the new string.
//
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros
// the amount of digits should be considered.

// REGEX - /\d/ = matches an integer
// gi = global flags for .match() method on strings - return all matched elements
// each as an element in an array

function incrementString(strng) {
  char = strng.match(/\D/gi)
  num = strng.match(/\d/gi)

  if (num === null && char === null) {
    return '1'
  } else if (num === null) {
    return char.join("") + '1'
  } else if (char === null ) {
     if (num.join("").startsWith('0')) {
        num = num.join("")
        numLength = num.length
        newNum = parseInt(num, 10) + 1
        newStringNum = newNum.toString()
        zeros = numLength - (newStringNum.length)
        appendZeros = '0'.repeat(zeros)
        result = appendZeros + newStringNum
        return result
        } else {
        newNum = parseInt(num, 10) + 1
        newStringNum = newNum.toString()
        result = newStringNum
        return result
        }
  } else if (num.join("").startsWith('0')) {
    num = num.join("")
    numLength = num.length
    newNum = parseInt(num, 10) + 1
    newStringNum = newNum.toString()
    zeros = numLength - (newStringNum.length)
    appendZeros = '0'.repeat(zeros)
    result = char.join("") + appendZeros + newStringNum
    return result
  } else {
    num = num.join("")
    newNum = parseInt(num, 10) + 1
    newStringNum = newNum.toString()
    result = char.join("") + newStringNum
    return result
  }
}
