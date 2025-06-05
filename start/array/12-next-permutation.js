// math related logic

`https://www.youtube.com/watch?v=VVPUAUVbjfM` 
`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/next-permutation5226`



// DSA method


const NP = (arr) => {
  let peak
  // from right check for a peak value, only the 1st found(so use break)
  for (let i = arr.length - 1; i > 0; i--) { //i>0 => i & i-1
    if(arr[i]>arr[i-1]){
      peak = i
      break; // dont forget
    }
  }

  //now again look for the number greater than (peak - 1) 
  for (let j = arr.length - 1; j >= peak; j--) {
    //if found, swap found num and peak - 1  
    if (arr[j] > arr[peak - 1]) {
      [arr[j], arr[peak - 1]] = [arr[peak - 1], arr[j]]
      break  //dont forget
    }
  }

  //now final step --- reverse from peak to end
  const revFn = (arr, start, end) => {
    while (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = arr[temp]
      start++
      end--
    }
    return arr
  }

  revFn(arr,peak,arr.length-1)

}