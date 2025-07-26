`https://leetcode.com/problems/longest-substring-without-repeating-characters/description/`



// Time Complexity: O(n), Space Complexity: O(n)
const LSWRC = (str) => {
  let container = new Set()
  let longest = 0
  let l = 0
  for(let r = 0;r<str.length;r++){
//if is not used as we need to keep on removing items as long as s[r]is there as it is like starting new
    while(container.has(s[r])){ // 2. now here, like ...
      container.delete(s[l])    // ..whatif it already exists in set
      l++
    }
    container.add(str[r]) //2. start with this line 
    longest = Math.max(longest, r - l + 1) 
//r-l+1 is length of th curr window in place, now lets say its on 
// l = 2 and r = 5, r-l = 3, but always length is +1 right??? so we adq 1
// more info -> lets say 3 => 0,1,2,3 => 4length
  }
  return longest
}