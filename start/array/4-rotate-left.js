// Two-Pointer Pattern & array manipulation

`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/rotate-array-by-n-elements-1587115621`



// DSA method


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


const RL = (arr, k) => {
  k = k % n

  revFn(arr, 0, arr.length - 1)
  revFn(arr, 0, arr.length - 1 - k)
  revFn(arr, arr.length - k, arr.length - 1)

}