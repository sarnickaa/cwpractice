// There is an array with some numbers.
// All numbers are equal except for one.
// Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2

function findUniq(arr) {
  result = {}
  uniqVal = 0

  for (i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) // if result object DOES NOT HAVE key = array element
      result[arr[i]] = 0 // set that key = 0
    result[arr[i]] += 1 // on each iteration - increment key value by 1 when encountered again
  }
  for (var key in result) {
    if (result[key] === 1)
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

// this solution passed mosto of the tests EXCEPT for the tests dealing with floats/non integer elements

// googled for solution

// array.sort() sorts the array in place
// then heck to see if first 2 elements are the same - if so - the last element must be the unique one
// this mutates the array but doesnt change the type of the elements like the above i.e. converts keys to strings


function findUniq(arr) {
  let result = arr.sort()

  if (result[0] === result[1]){
    finResult = result.slice(-1).pop()
    return finResult
  }
  else {
    return result[0]
  }
}
