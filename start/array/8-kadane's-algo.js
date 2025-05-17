// kadane algo

`https://www.youtube.com/watch?v=6HntYGZyjZI` `kadane`
`https://www.youtube.com/watch?v=BlbCI5dY9Uc` `normie`
`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/minimize-the-heights3351`



// kadane method

const KA = (arr) => {
  let currMax = arr[0]
  let maxSum = arr[0]

  for (let i = 0; i < arr.length; i++) {
    currMax = currMax + arr[i]
    currMax = Math.max(currMax, arr[i])
    maxSum = Math.max(maxSum, currMax)
  }

  return maxSum
}


// DSA method

const N = (arr) => {
  let currSum = arr[0]
  let maxSum = arr[0]
  for(let i = 0;i<arr.length;i++){
    currSum = currSum + arr[i]
    if(currSum>maxSum){
      maxSum = currSum
    }
    if(currSum<0){

      currSum = 0
    }
  }

  return maxSum
}

