//  manipulation with logic

`https://www.youtube.com/watch?v=ZjxJdeR-am8`
`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/smallest-positive-missing-number-1587115621`



// DSA method


const SMPN = (arr) => {
  let smpn = 1
  arr.sort((a, b) => a - b)   ///dont forget
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === smpn && arr[i] > 0) {
      smpn++
    }
  }

  return smpn
}