// Bob is preparing to pass IQ test.
// The most frequent task in this test is to
// find out which one of the given numbers
// differs from the others. Bob observed that
// one number usually differs from the others in evenness.
// Help Bob — to check his answers,
// he needs a program that among the given numbers
// finds one that is different in evenness, a
// nd return a position of this number.
//
// ! Keep in mind that your task
// is to help Bob solve a real IQ test,
// which means indexes of the elements
// start from 1 (not 0)

function iqTest(numbers){
  arr = numbers.split(/\s+/)
  let evens = []
  let odds = []

  for (i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i])
    } else {
      odds.push(arr[i])
    }
  }
 if (evens.length === 1) {
   return arr.indexOf(evens[0]) + 1
 } else if (odds.length === 1) {
   return arr.indexOf(odds[0]) + 1
 }
}
