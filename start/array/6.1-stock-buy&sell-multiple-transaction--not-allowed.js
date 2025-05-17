// Two-Pointer Pattern & array manipulation

`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/buy-stock-2`



// DSA method


const sbasmtna = (arr)=>{
  let maxProfit = 0
  let min = arr[0]


  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i])
    maxProfit = Math.max(maxProfit, arr[i] - min)
  }

  return maxProfit
}