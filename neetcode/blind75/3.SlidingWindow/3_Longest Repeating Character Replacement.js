 `https://leetcode.com/problems/longest-repeating-character-replacement/`

 const LRCR = (str)=>{
  let container = new Map()
  let longest = 0
  let currMaxCount = 0
  let l = 0
  for(let r = 0; r<str.length;r++){
    container.set(str[r], (container.get(str[r]) || 0) + 1)
    currMaxCount = Math.max(currMaxCount, container.get(str[r]))

    while(r-l+1-currMaxCount>k){
//decrement str[l], not str[r] — because you're shrinking the window from the left side.
      container.set(str[l], container.get(str[l])-1)
      l++
    }

    longest = Math.max(longest, r-l+1)
  }
  return longest
 }