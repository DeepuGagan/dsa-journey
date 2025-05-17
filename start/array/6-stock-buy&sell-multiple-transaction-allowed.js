// greedy

`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/stock-buy-and-sell2615`



// DSA method


const sbasmta = (arr)=>{
  let maxProfit = arr[1]

  arr.sort((a,b)=>a-b) //dont forget

  for(let i = 1;i<arr.length;i++){
    if(arr[i]>arr[i-1]){
      maxProfit = maxProfit + arr[i]
    }
  }

  return maxProfit
}


// notice i used i = 1, coz in loop there is usage of i & i-1, if code had i = 0 => i-1 will be -1 at 0

// if required i = 0 , then use i and i+1 but at last element i+1 will go out so, =>  i<arr.lrngth - 1 or i<=arr.length -2 (-1-1)