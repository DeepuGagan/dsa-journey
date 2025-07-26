`https://leetcode.com/problems/valid-palindrome/`


//my method
const isAlphaNumeric = (char) => (
  (char >= 'a' && char <= 'z') ||
  (char >= 'A' && char <= 'Z') ||
  (char >= '0' && char <= '9')
)

// Time Complexity: O(n), Space Complexity: O(n)
const IP = (str) => {
  let filtered = ''
  for (let s of str) {
    isAlphaNumeric(s) && (filtered += s.toLowerCase()) // or a if/else block will work too
  }
 return filtered === filtered.split('').reverse().join('')
}



// DSA

const IP2 = (str) => {
  let l = 0
  let r = str.length - 1
  while (l < r) {
    if (!isAlphaNumeric(str[l])) {
      l++
      continue //very imp
    }
    if (!isAlphaNumeric(str[r])) {
      r--
      continue //very imp
    }

    if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false
    }
    l++
    r--
  }
  return true
}