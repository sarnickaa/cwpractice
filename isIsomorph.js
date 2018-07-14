function isIsogram(str) {
  arr = str.toUpperCase().split("")
  results = []

  for (i = 0; i < arr.length; i++) {
    let val = arr[i]

    if (results.indexOf(val) === -1) results.push(val)
  }
  if (arr.length > results.length) {
    return false
  } else {
    return true
  }
}

// .indexOf method returns -1 if the index of the value in question does not exist
// isomorph = a word without duplicate characters

// if the index of the element from the original array DOESNT already exits in the results array (i.e. its indexOf === -1) - IT IS NOT A DUPLICATE = push it in
// if the index of the element DOES already exist - it IS  a duplicate - do not push it in
// if results array is shorter than original - it has duplicates removed THUS original is NOT an isogram
