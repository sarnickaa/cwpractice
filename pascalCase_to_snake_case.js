// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.
//
// Examples:
//
// //  returns test_controller
// toUnderscore('TestController');
//
// // returns movies_and_books
// toUnderscore('MoviesAndBooks');
//
// // returns app7_test
// toUnderscore('App7Test');
//
// // returns "1"
// toUnderscore(1);

function toUnderscore(string) {
  if (typeof string !== 'string') {
    return `${string}`
  } else if (string.length === 1) {
    return string.toLowerCase()
  } else {
   return string.split(/(?=[A-Z])/).join("_").toLowerCase()
  }
}
