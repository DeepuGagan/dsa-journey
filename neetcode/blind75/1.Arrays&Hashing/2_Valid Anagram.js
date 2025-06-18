`https://leetcode.com/problems/valid-anagram/description/`



// DSA method


const va = (s, t) => {
  if (s.length !== t.length) return false
  let container = {} //also can be done via -  new Map()

  for (let str of s) {
    if (!container[str]) {
      container[str] = 1
    } else {
      container[str]++
    }
  }

  for (let str of t) {
    if (container[str] === undefined || container[str] < 1) {
      return false
    }
    container[str]--
  }

  return true

}