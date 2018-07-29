// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
// Decimal	     0 1	2	3	4	5	6	7	8	9	10 11	12 13	14 15
// Hexadecimal   0 1	2	3	4	5	6	7	8	9	A  B	C	  D	 E  F

// Take the first number, 220, and divide by 16. 220 / 16 = 13.75, which means that the first digit of the 6-digit hex color code is 13, or D.
// Take the remainder of the first digit, 0.75, and multiply by 16. 0.75 (16) = 12, which means that the second digit of the 6-digit hex color code is 12, or C.
//
// So far, we have #DC____.

function rgb(r, g, b){
  hexArr = [r, g, b]
  results = []

  for(i=0; i < hexArr.length; i++) {
    if (hexArr[i] > 255) {
      results.push('FF')
    } else if (hexArr[i] < 0) {
      results.push('00')
   }  else {
      conv = hexArr[i] / 16
      int = Math.floor(conv)
      dec = conv - int

      if (int <= 9) {
        results.push(int)
      } else {
        switch (int) {
          case 10:
          results.push('A')
          break;
          case 11:
          results.push('B')
          break
          case 12:
          results.push('C')
          break
          case 13:
          results.push('D')
          break;
          case 14:
          results.push('E')
          break
          case 15:
          results.push('F')
          break
        }
      }

    if (dec * 16 <=9) {
      results.push(dec * 16)
    } else {
      switch (dec * 16) {
        case 10:
        results.push('A')
        break;
        case 11:
        results.push('B')
        break
        case 12:
        results.push('C')
        break
        case 13:
        results.push('D')
        break;
        case 14:
        results.push('E')
        break
        case 15:
        results.push('F')
        break
      }
    }

    }
  }
  return results.join("")
}
