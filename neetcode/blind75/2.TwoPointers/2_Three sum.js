`https://leetcode.com/problems/3sum/`

//my method - 3loops
const TS1 = (nums) => {
  let ret = new Set()
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          ret.add(JSON.stringify([nums[i], nums[j], nums[k]]))
        }
      }
    }
  }
  return Array.from(ret).map(a => JSON.parse(a))
}

//Dsa

// Time Complexity: O(n^2), Space Complexity: O(|output|)
const TS = (nums) => {
  nums.sort((a, b) => a - b)
  let ret = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        ret.push([nums[i], nums[l], nums[r]])
        l++
        r--
        while (l < r && nums[l] === nums[l - 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
      }
    }
  }
  return ret
}