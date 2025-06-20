`https://leetcode.com/problems/group-anagrams/description/`


//my method


const TKFE = (nums, k) => {
  let container = new Map()
  for (let num of nums) {
    container.set(num, (container.get(num) || 0) + 1)
  }
  return [...container.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([a, b]) => a)
}


// DSA method

const TKFE2 = (nums, k) => {
  let container = new Map()
  for (let num of nums) {
    container.set(num, (container.get(num) || 0) + 1)
  }

  let bucket = Array.from({ length: nums.length }, () => [])
  for (let [key, value] of container.entries()) {
    bucket[value].push(parseInt(key)) //imp
  }

  let ret = []
  for (let i = bucket.length - 1; i >= 0; i++) {
    for (let num of bucket[i]) { //imp
      if (ret.length === k) {
        break
      }
      ret.push(num)
    }
    if (ret.length === k) break
    return ret
  }
}