// Two-Pointer Pattern & array manipulation

`https://www.youtube.com/watch?v=fxT9KjakYPM`
`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/max-circular-subarray-sum-1587115620`



// DSA method

const MCSA = (arr) => {
  let currMin = 0, currMax = 0, maxSum = arr[0], minSum = arr[0], total = 0

  for (let i = 0; i < arr.length; i++) {
    currMin = Math.min(currMin, arr[i])
    currMax = Math.max(currMax, arr[i])
    total = total + arr[i]
    minSum = Math.min(minSum, currMin)
    maxSum = Math.max(maxSum, currMax)
  }

  return Math.max(maxSum, total-minSum)

}