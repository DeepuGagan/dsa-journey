`https://leetcode.com/problems/product-of-array-except-self/`

// myMethod - with division

const POAES = (nums) => {
  let zeroCount = 0
  let product = 1
  let arr = []
  for (let num of nums) {
    if (num === 0) {
      zeroCount++
    } else {
      product *= num
    }
  }
  if (zeroCount > 1) return Array.from({ length: nums.length }, () => 0)
  for (let num of nums) {           //     for(let i = 0;i<nums.length;i++){           
    if (zeroCount > 0) {            //         if(zeroCount>0){
      if (num === 0) {              //             arr[i] = nums[i] === 0 ? product : 0
        arr.push(product / num)     //         }else{
      } else {                      //             arr[i] = product/nums[i]
        arr.push(0)                 //         }
      }                             //     }
    } else {                        
      arr.push(product / num)
    }
  }
}



// DSA Method - without division
const POAES2 = (nums) => {
  let prefix = [] //Array.from({ length: nums.length }, () => 1) if used this ..
  let postfix = [] // ..then no need of initializing pre/post fix to 1 like it is done 
  let result = []
  prefix[0] = 1 //no elements to the left of index 0, so the product is 1.
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1]
  }
  postfix[nums.length - 1] = 1 //no elements to the right of index n-1, so the product is 1.
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1]
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * postfix[i]
  }
  return result
}