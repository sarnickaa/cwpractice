// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!
//
// Here's the deal:
//
// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:
//
// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
//
// " Hello World " => "#HelloWorld"

// https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
// str = str.replace(/\s+/g, '');
// is a better solution. It produces the same result, but it does it faster.
//
// The Regex
//
// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
//
// A great explanation for + can be found here.
//
// As a side note, you could replace the content between the single quotes to anything you want, so you can replace whitespace with any other string.

// .slice is used because .charAt returns the first character - thus need the rest of the word to concat together
function generateHashtag (str) {
  if (str.replace(/\s+/g, '').length + 1 > 140 || str === '') {
    return false
  } else {
      let arr = str.split(' ')
      let newStr = ''
      for (i=0; i < arr.length; i++) {
        newWord = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        newStr += newWord
      }
    let hashTag = `#${newStr}`
    return hashTag
  }
}

// function generateHashtag (str) {
//   return str.length > 140 || str === '' ? false :
//     '#' + str.split(' ').map(capitalize).join('');
// }
//
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// best practise result
