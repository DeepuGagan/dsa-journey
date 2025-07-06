`https://leetcode.com/problems/search-a-2d-matrix/description/`

//my method
const SA2DM = (matrix, target) => {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) { // imp - matrix[r].length
      if (matrix[r][c] === target) return true
    } 
  }
  return false
}

const SA2DM2 = (matrix, target) => {
  let rows = matrix.length - 1
  let col = matrix[0].length - 1
  let targetRow = -1
  let top = 0
  let bot = rows
  while (top <= bot) {   // First binary search to find the row that may contain the target
    let m = Math.floor((top+bot) / 2)
    if (target < matrix[m][0]) {
      bot = m - 1
    } else if (target > matrix[m][col]) {
      top = m + 1
    } else {
      targetRow = m
      break
    }
  }

  if (targetRow === -1) return -1
  let l = 0
  let r = col
  while (l <= r) {  // Second binary search within the identified row
    let m = Math.floor((l + r) / 2)
    if (matrix[targetRow][m] === target) return true
    if (target < matrix[targetRow][m]) {
      r = m - 1 // target < curr ==> target is present on left side....so move right pointer
    } else {
      l = m + 1
    } // target > curr ==> target lies on right of curr .... so move left pointer
  }

  return false
}