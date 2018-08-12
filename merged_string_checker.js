// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
//
// The restriction is that the characters in part1 and part2 are in the same order as in s.
//
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// index # of given letter in sArr must =>


function isMerge(s, part1, part2) {

let sArr = s.split("")
let p1Arr = part1.split("")
let p2Arr = part2.split("")
let arr1 = Array(sArr.length).fill('')
let arr2 = Array(sArr.length).fill('')

for (i=0; i < p1Arr.length; i++) {
  index = sArr.indexOf(p1Arr[i])
  arr1[index] = p1Arr[i]
}

for (i=0; i < p2Arr.length; i++) {
  index = sArr.indexOf(p2Arr[i])
  arr2[index] = p2Arr[i]
}
// console.log(arr1)
// console.log(arr2)

for (i=0; i < arr2.length; i++) {
  if (arr2[i] !== '') {
    arr1[i] = arr2[i]
    // console.log(arr1)
  }
  // console.log(arr1)
}
if (arr1.join("") === s){
  console.log(arr1.join(""))
  return true
} else return false
}
