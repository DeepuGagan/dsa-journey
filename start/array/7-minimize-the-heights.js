// greedy

`https://www.youtube.com/watch?v=I6_fYaR17gk`
`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/minimize-the-heights3351`



// DSA method


const MTH = (arr) => {
  let n = arr.length
  let mx = arr[0]
  let mi = arr[0]
  let ans = arr[n - 1] - arr[0]

  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - k < 0) {
      continue
    }
    mx = Math.max(arr[i] + k, arr[n - 1] - k)
    mi = Math.min(arr[0] + k, arr[i + 1] - k)
    ans = Math.min(min, mx - mi)   // dont forget
  }
  return ans

}