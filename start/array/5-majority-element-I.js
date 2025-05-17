// Two-Pointer Pattern & array manipulation

`https://leetcode.com/problems/majority-element/description/`



// DSA method


const MEI = (arr) => {
  let counter = 0
  let candidate

  for (let num of arr) {
    if (counter === 0) {
      candidate = num
      counter++
    } else if (num === candidate) {
      counter++
    } else {
      counter--
    }
  }

  return candidate
}
