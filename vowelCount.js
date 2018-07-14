// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.


// Test.assertEquals(getCount("abracadabra"), 5)


function getCount(str) {
  var vowelsCount = 0;

  arr = str.split("")

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'i':
        vowelsCount += 1
        break
      case 'a':
        vowelsCount += 1
        break
      case 'e':
        vowelsCount += 1
        break
      case 'o':
        vowelsCount += 1
        break
      case 'u':
        vowelsCount += 1
    }
  }
  return vowelsCount;
}
