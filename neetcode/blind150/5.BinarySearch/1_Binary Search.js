`https://leetcode.com/problems/binary-search/description/`

// Time Complexity: O(log n), Space Complexity: O(1)
const BS = (nums, target) => {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2) // l+(r-l)/2
    if (nums[m] === target) return m
    if (target < nums[m]) { //use target 1st for better understanding,
      r = m - 1             // if t<m, then t lies in left
    } else {
      l = m + 1
    }
  }
  return -1
}

// Time Complexity: O(log n), Space Complexity: O(log n) (due to recursion stack)
const BS_r = (l, r, nums, target) => {
  let m = Math.floor((l + r) / 2)
  if (l > r) return -1
  if (nums[m] === target) return m
  if (target < nums[m]) {
    return BS_r(l, m - 1, nums, target)
  } else {
    return BS_r(m + 1, r, nums, target)
  }

}

// Time Complexity: O(log n), Space Complexity: O(log n)
const recursion = (nums, target) => {
  return BS_r(0, nums.length - 1, nums, target)
}