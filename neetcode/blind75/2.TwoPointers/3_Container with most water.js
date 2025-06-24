`https://leetcode.com/problems/container-with-most-water/`

const CWMW = (nums) => {
  let l = 0
  let r = nums.length - 1
  let MostWater = 0
  while (l < r) {
    let length = Math.min(nums[l], nums[r])
    let breadth = r - l
    let Area = length * breadth
    MostWater = Math.max(MostWater, Area)
    if (l < r) { //imp move poointer whichever is shorter
      l++
    } else {
      r--
    }

  }
  return MostWater
}