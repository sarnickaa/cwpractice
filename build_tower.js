// Build Tower by the following given argument:
//   number of floors(integer and always greater than 0).
//
// Tower block is represented as * [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
//
// 1 floor = x1 = +0
// 2 floors = x3 = +1
// 3 floors = x5 = +2
// 4 floors = x7 = +3

function towerBuilder(nFloors) {
  let tower = []
  let blocks = '*'
  for (i = 1; i <= nFloors; i++) {
    if (i === 1) {
      result = blocks.repeat(1)
      spaced = ' '.repeat(nFloors - 1)
      tower.push(spaced + result + spaced)
    } else {
      result = blocks.repeat(i + (i - 1))
      spaced = ' '.repeat(nFloors - i)
      tower.push(spaced + result + spaced)
    }
  }
