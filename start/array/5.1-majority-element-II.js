// Two-Pointer Pattern & array manipulation

`https://leetcode.com/problems/majority-element-ii/description/`



// DSA method


const MEII = (arr) => {
  let counter1 = 0, counter2 = 0
  let candidate1, candidate2


  for (let num of arr) {
    if (candidate1 === num) {
      counter1++
    } else if (counter1 === 0) {
      candidate1 = num
      counter1++
    } else if (candidate2 === num) {
      counter2++
    } else if (counter2 === 0) {
      candidate2 = num
      counter2++
    } else {
      counter1--
      counter2--
    }
  }

  counter1 = 0
  counter2 = 0

  for(let num of arr){
    if(candidate1===num){
      counter1++
    }else if(candidate2===num){
      counter2++
    }
  }

  let ret = []
  const n = arr.length
  if(counter1>n/3) arr.push(candidate1)
  if(counter2>n/3) arr.push(candidate2)

  return ret

}

//also make it in ascending order if asked