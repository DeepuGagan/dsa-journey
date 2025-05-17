// Two-Pointer Pattern & array manipulation

`https://leetcode.com/problems/rotate-array/description/`



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


const RR = (arr, k) => {
  k = k % arr.length

  revFn(arr, 0, arr.length - 1)
  revFn(arr, 0, k - 1)
  revFn(arr, k, arr.length - 1)
}