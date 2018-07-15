// Implement the function unique_in_order
// which takes as argument a sequence and
// returns a list of items without any elements
// with the same value next to each other
// and preserving the original order of elements.
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


let uniqueInOrder = function(iterable) {
  results = []

  if (typeof iterable === "string") {
    array = iterable.split("")

    for (i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1])
        results.push(array[i])
    }
  } else {
    array = iterable

    for (j = 0; j < array.length; j++) {
      if (array[j] !== array[j + 1])
        results.push(array[j])
    }
  }
  return results
}

// clever use of ternary in solution to prevent code repetition:
// iterable = typeof iterable === 'string' ? iterable.split('') : iterable;


// really clever short solution:
// var uniqueInOrder=function(iterable){
//   return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
// }
