`https://leetcode.com/problems/two-sum/description/`



  // my method

  - `loop inside loop, i & j and check for target, but will be O(n^2)`



//DSA method


const sum2 = (nums, target) => {
  let container = new Map()
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i]
    if (container.has(compliment)) {
      return [i, container.get(compliment)]
    }
    container.set(nums[i], i)  // imp
  }
}
