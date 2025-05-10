// Two-Pointer Pattern (Swapping from Ends)

`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/reverse-an-array`



// My method

const RAA = (arr)=>{
  let rev = []
  for (let i = arr.length; i>=0;i--){
    rev.push(arr[i])
  }
}


const RAA2 = (arr)=>{
  let rev = []
  let counter = 0
  for (let i = arr.length; i>=0;i--){
    rev[i] = arr[i]
    counter++
  }
}


// Dsa Method

const dsa = (arr)=>{
  let left = 0
  let right = arr.length - 1

  while(left<right){
    [ arr[left], arr[right]]=[ arr[left], arr[left]]
    left++
    right--
  }

}


// more opti -  dont use destructuring
while (l < r) {
  let temp = s[l]
  s[l] = s[r]
  s[r] = temp
  l++
  r--
}