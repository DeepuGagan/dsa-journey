`https://leetcode.com/problems/longest-consecutive-sequence/`

//my method

// Time Complexity: O(n log n), Space Complexity: O(n)
const LCS = (nums) => {
  if (nums.length === 0) return 0 // so no need to have long&streak start from 0
  let set = Array.from(new Set(nums)) // set is not real array, so made array out of it
  let long = 1
  let streak = 1
  set.sort((a, b) => a - b)
  for (let i = 0; i < set.length - 1; i++) {
    if (set[i] === set[i + 1] - 1) {
      streak++
    } else {
      streak = 1
    }
    long = Math.max(long, streak)
  }
  return long
}

//DSA

// Time Complexity: O(n), Space Complexity: O(n)
const LCS2 = (nums) => {
  if (nums.length === 0) return 0
  let set = new Set(nums)
  let long = 1
  for (let num of set) {
    if (!set.has(num - 1)) {
      let streak = 1
      while (set.has(num + streak)) { //using streak here, not +1 // very imp
        streak++
      }
      long = Math.max(long, streak)
    }
  }
  return long
}