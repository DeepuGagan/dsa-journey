`https://leetcode.com/problems/group-anagrams/description/`



  // DSA method


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
