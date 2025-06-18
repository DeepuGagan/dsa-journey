`https://leetcode.com/problems/contains-duplicate/description/`



// my method

const dup = (nums) => new Set(nums).size !== nums.length

`or`

const dup2 = (nums) => {
  let seen = new Set()

  for (let num of nums) {
    if (seen.has(num)) return true
    seen.add(num)
  }
  return false
}


//DSA method


const dup3 = (nums) => {
  let container = {}

  for (let num of nums) {
    if (!container[num]) {
      container[num] = 1
    } else {
      container[num]++
    }
    if (container[num] > 1) return true
  }
  return false
}



const dup4 = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true
    return false
  }
}