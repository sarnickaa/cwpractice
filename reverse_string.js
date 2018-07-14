// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


function reverseWords(str) {
  let rev = str.split(/(\s+)/)
  let results = []
  for (i = 0; i < rev.length; i++) {
    let elem = rev[i].split("").reverse().join("")
    results.push(elem)
  }
  return results.join("")
}

//split string preserving whitespace - regex
// str.split(/(\s+)/)
// \s matches any character that is whitespace
// + makes it greedy - matching a group starting with characters
// ending with white space
// next group starts when there is a character AFTER white space
