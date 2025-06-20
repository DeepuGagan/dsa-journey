`https://www.geeksforgeeks.org/problems/encode-and-decode-strings/1`

// DSA 
const encode = (str) => {
  let encodedStr = ''
  for (let s of str) {
    encodedStr = encodedStr + s.length + '#' + s
  }
  return encodedStr
}

const decode = (str) => {
  let arr = []
  let i = 0
  while (i < str.length) {
    let j = i
    if (str[j] !== '#') {
      j++
    }
    let length = parseInt(str.substring(i, j)) //imp parseInt
    i = j + 1
    j = i + length
    arr.push(str.substring(i, j))
    i = j + 1
  }
  return arr
}