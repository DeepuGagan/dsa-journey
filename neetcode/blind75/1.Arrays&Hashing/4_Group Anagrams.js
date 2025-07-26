`https://leetcode.com/problems/group-anagrams/description/`



  // DSA method


  // Time Complexity: O(n*k*log(k)), Space Complexity: O(n*k)
// n = number of strings, k = max string length
const GA = (strs) =>{
    const sorted = strs.map(s=>s.split('').sort().join(''))

    let container = new Map()
    for(let i = 0; i<strs.length;i++){
      if(!container.has(sorted[i])){
        container.set(sorted[i], [strs[i]])
      }else{
        container.get(sorted[i]).push(strs[i])
      }
    }

    return container.values()

  }
