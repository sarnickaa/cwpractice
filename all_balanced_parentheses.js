// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses
//
// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

// https://gist.github.com/seemaullal/c504de50ab42a57b59c1
// https://www.thecodingdelight.com/understanding-recursion-javascript/
// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php


function balancedParens(n) {
  let combos = []
  getCombinations = (openNum,closingNum,curr) => {
      if (openNum === 0 && closingNum === 0)
          combos.push(curr);
      if (openNum > 0) {
          getCombinations(openNum-1, closingNum + 1, curr + "(");
      }
      if (closingNum > 0) {
          getCombinations(openNum, closingNum - 1, curr + ")");
      }
  }

  getCombinations(n,0,"");

  return combos;
}
