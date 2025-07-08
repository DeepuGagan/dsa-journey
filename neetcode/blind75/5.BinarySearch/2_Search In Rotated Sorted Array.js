`https://leetcode.com/problems/search-in-rotated-sorted-array/description/`

const SIRSA = (nums, target) => { // take [3,4,5,1,2] as example, take 4 as ex for all
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (target === nums[m]) return m
    // 1. find which portion is m located at. (bigger sort(always left)/smaller sort(always right))
    if (nums[l] <= nums[m]) { //check with left, if left is less than min, mid is in left. 
      //2. after knowing the mid location of left/right, its just the target game...
      //... m is in left portion.. now neeed to check is target in the current range of l & m
      if (target >= nums[l] && target < nums[mid]) { //target is here in left
        r = m - 1
      } else {
        l = l + 1
      }
    } else {// if right is greater than min, mid is in right 
      // m is in right portion.. now neeed to check is target in the current range of m & r
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
}
//<= & >= for nums[l] & nums[r] COZ - to include the left bound and right
// Not <= nums[m]..... If target === nums[m], we've already returned — we're done.
//nums[l] <= nums[m] ... [3, 3, 3, 4, 2] warks for this case