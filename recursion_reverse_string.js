// Reverse a string. The recursive function call should return the reversed result of the passed in string. E.g.
// reverseStr("cowbell") --> "llebwoc"

// The charAt() method returns the character at the specified index in a string.
// https://www.w3schools.com/jsref/jsref_charat.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring = RETURNS A STRING STARTING AT THE SPECIFIED INDEX
// https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea


// * Function calls: - the order of the functions coming onto the stack:
//  * reverseStr("troll"): - initial function call - the recursive case is run which equates to:
//  * return reverseStr("roll") + "t"; (t is the return value - 'roll' is not returned as it is the value for the function call itself)
//  * return reverseStr("oll") + "r"; (r is the return value)
//  * return reverseStr("ll") + "o"; (o is the return value)
//  * return reverseStr("l") + "l"; (l is the return value)
//  * return reverseStr("") + "l"; (l is the return value)
//  * return ""; - base case is hit ("" is the return value) - last in first out in the recursion call stack/unravelling of nested functions
//  *
//  * Results will now bubble up as reverseStr("") is popped off the call stack first,
//
//  * "" +
//  * l +
//  * l +
//  * o +
//  * r +
//  * t +
//  * */
function reverseStr(str) {
    if (str === '') {  // to prevent empty string from overflowing call stack
        return '';
    }
    return reverseStr(str.substr(1)) + str.charAt(0);
}
