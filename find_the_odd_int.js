// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findUniq(arr) {
  result = {}
  uniqVal = 0

  for (i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) // if result object DOES NOT HAVE key = array element
      result[arr[i]] = 0 // set that key = 0
    result[arr[i]] += 1 // on each iteration - increment key value by 1 when encountered again
  }
  for (var key in result) {
    if (result[key] % 2 !== 0)
      uniqVal = key
  }
  // let final = parseInt(uniqVal, 10)
  let final = parseFloat(uniqVal)
  // returns floating point number
  // can parse a string to integer
  // can parse Infinity & -Infinity value
  // more accomodating than parseInt()
  return final
}
