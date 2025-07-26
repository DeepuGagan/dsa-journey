`https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/`

// Time Complexity: O(n), Space Complexity: O(1)
const FMIRSA = (nums) => {
  return Math.min(...nums); // or use a simple for loop to track min
} 

// or simple iteration and check min
// Time Complexity: O(n), Space Complexity: O(1)
const FMIRSA2 = (nums) => {
  let min = nums[0]; // start with first element as min

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

// Time Complexity: O(log n), Space Complexity: O(1)
const FMIRSA3 = (nums) => { // have this as example - [3,4,5,1,2]
  let l = 0
  let r = nums.length - 1
  while (l <= r) { //aslo if you use l<r, you can potentially remove a iteration and save time,coz when l=r we found min
    let m = Math.floor((l + r) / 2)
    if (nums[r] < nums[m]) { // no point in checking left side as you know its always the max side // 2<5
      l = m + 1
    } else { // elseif nums[r]>nums[m], shift r to current m, then one more else{return nums[l]}
      r = m //imp, 
    }
  }
  return nums[l] // or nums[r], both are same here
}