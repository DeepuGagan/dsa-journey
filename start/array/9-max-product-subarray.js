// Two-Pointer Pattern & array manipulation

`https://www.youtube.com/watch?v=lXVy6YWFcRM`
`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/maximum-product-subarray3604`



// DSA method

const MPS = (arr) => {
  let maxProd = arr[0]  // dont forgrt
  // let maxProd = 1  // this is a classic trap in the Maximum Product Subarray problem!
  /**
   * Because the array can contain:
      Negative numbers
      Zeros
      All values < 1
      And subarrays starting at index 0 may not be optimal
   * If you initialize prodMx = 1, you might miss cases where the true maximum product is less than 1, like a negative number, or you skip a valid subarray that starts at index 0.
   */

  let currMin = 1
  let currMax = 1

  for (let i = 0; i < arr.length; i++) {
    let tempmax = currMax * arr[i] 
    currMax = Math.max(arr[i], Math.max(currMax * arr[i], currMin * arr[i]))
    currMin = Math.min(arr[i], Math.min(tempmax, currMin * arr[i]))
    maxProd = Math.max(maxProd, currMax)
  }

  return maxProd

}
