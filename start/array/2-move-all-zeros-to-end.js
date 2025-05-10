// Two-Pointer Pattern (In-place Movement)

`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/move-all-zeroes-to-end-of-array0751`




// My method


const MAZTE = (arr)=>{
  let counter = 0
  const nonZeros = arr.filter(n=>{
    if(n===0){
      counter++
      return false
    } else {
      return true
    }
  })

  return [...nonZeros, ...Array(counter).fill(0)]
}


// DSA way

const dsa = (arr) => {
  let counter = 0   // lastNonZeroIndex

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {                                         // arr[i] === 0 ...shofts to left
      [arr[i], arr[counter]] = [arr[counter], arr[i]]
    }
    counter++
  }

}


//more opti -  avoids this:
if (i !== lastNonZero)
  [nums[0], nums[0]] = [nums[0], nums[0]];



// more opti - use temp
temp = a[i]
a[i] = a[counter]
a[counter] = temp


