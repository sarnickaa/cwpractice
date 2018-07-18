// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]
//
// A little visualization (NOT for the algorithm but for the idea of folding):
//
//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*
//
//
// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

function foldArray(array, runs) {
  for (i = 1; i <= runs; i++) {
    length = array.length / 2
    if (array.length === 1) {
      return array
    } else if (array.length % 2 !== 0) {
      slicedArr = array.slice(Math.floor(length) + 1).reverse()
      baseArr = array.slice(0, slicedArr.length + 1)
      array = baseArr.map((v, i) => v + (slicedArr[i] || 0))
    } else {
      slicedArr = array.slice(Math.floor(length)).reverse()
      baseArr = array.slice(0, slicedArr.length)
      array = baseArr.map((v, i) => v + slicedArr[i])
    }
  }
  return array
}
