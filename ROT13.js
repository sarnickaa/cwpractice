// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.
//
// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:
//
// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const rot = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("")
 let strArr = str.split("")
 let word = []
 const caps = new RegExp("^([A-Z])*$")
 const nonAlpha = new RegExp("^([^a-zA-Z])*$")

 for (i = 0; i < strArr.length; i++) {
   if (strArr[i] === '') {
     word.push('')
   } else if (nonAlpha.test(strArr[i])) {
     word.push(strArr[i])
   } else if (caps.test(strArr[i])) {
     let index = alph.indexOf(strArr[i])
     let letter = rot[index]
     word.push(letter)
   } else {
     let upLetter = strArr[i].toUpperCase()
     let index = alph.indexOf(upLetter)
     let letter = rot[index]
     word.push(letter.toLowerCase())
    }
  }
  return word.join("")
 }
