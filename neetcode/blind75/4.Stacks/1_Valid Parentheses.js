`https://leetcode.com/problems/valid-parentheses/`

//my method

// Time Complexity: O(n^2), Space Complexity: O(1)
const VP = (str) => {
  if (str.length % 2 !== 0) return false

  while (str.includes('()') || str.includes('[]') || str.includes('{}')) {
    str = str.replace('()', '')
    str = str.replace('{}', '')
    str = str.replace('[]', '')
  }
  return str.length === 0 // or !str
}


//DSA stack

// Time Complexity: O(n), Space Complexity: O(n)
const VP2 = (str) => {
  let stack = []

  for (let s of str) {
    if (s === '(' || s === '[' || s === '{') {
      stack.push(s)
    } else {
      if (stack.length === 0) return false
      if (s === ')' && stack[stack.length - 1] === '(' ||
        s === ']' && stack[stack.length - 1] === '[' ||
        s === '}' && stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

// Time Complexity: O(n), Space Complexity: O(n)
const VP3 = (str) => {
  let stack = []
  const c2o = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  for (let s of str) {
    if (c2o[s]) {
      if (stack.length === 0) return false
      if (stack[stack.length - 1] === c2o[s]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(s) //1. first do this, then go to if block
    }
  }
}