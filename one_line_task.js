palindrome=(n,c)=> {
  cArr = c.split("")
  pop = cArr.pop()
  return c + cArr.reverse().join("")
}


// does not account for n yet
