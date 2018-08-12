// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
//
// Here is a list of functions, we need:
//
// Math.round()
// Math.ceil()
// Math.floor()
//
// https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript
// const n = 123456;
// Array.from(n.toString()).map(Number);
// // [1, 2, 3, 4, 5, 6]

https://stackoverflow.com/questions/5294413/find-index-of-nan-in-a-javascript-array
// let index = [1,3,4,'hello',NaN,3].findIndex(Number.isNaN)
// console.log(index)

// return elements between arr[0] and arr[indexNaN] - pushed into new array,



Math.round = function(number) {
  arr = Array.from(number.toString()).map(Number)
  //array of number with decimal point = NaN
  let indexNaN = arr.findIndex(Number.isNaN)
  let int = []
  if (arr.length === 1) {
    return arr[0]
  }

    for (let i = 0; i < (indexNaN); i++) {
      int.push(arr[i])
    }

    let intString = int.join("")
    let intNum = parseInt(intString)

  if (arr[indexNaN + 1] >= 5) {
      return (intNum + 1)
  } else
      return intNum
};


Math.ceil = function(number) {
  arr = Array.from(number.toString()).map(Number)
  //array of number with decimal point = NaN
  let indexNaN = arr.findIndex(Number.isNaN)
  let int = []
  if (arr.length === 1) {
    return arr[0]
  }

    for (let i = 0; i < (indexNaN); i++) {
      int.push(arr[i])
    }

    let intString = int.join("")
    let intNum = parseInt(intString)

  if (intNum === 0) {
      return (intNum + 1)
} else
      return intNum + 1
};

Math.floor = function(number) {
  arr = Array.from(number.toString()).map(Number)
  //array of number with decimal point = NaN
  let indexNaN = arr.findIndex(Number.isNaN)
  let int = []
  if (arr.length === 1) {
    return arr[0]
  }

    for (let i = 0; i < (indexNaN); i++) {
      int.push(arr[i])
    }

    let intString = int.join("")
    let intNum = parseInt(intString)

    return intNum
};
