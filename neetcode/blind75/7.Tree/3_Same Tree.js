`https://leetcode.com/problems/same-tree/description/`


const ST = (p, q) => {
  if (!p && !q) {
    return true
  }

  if (p && q && p.val === q.val) { // p&q coz, if one of them is null they cant be same
    return ST(p.left, q.left) && ST(p.right, q.right) // both Boolean values, 
    // and you don’t want to check(===), so && is used... ie,
    // Check if left subtrees are identical
    // AND if right subtrees are identical
    // Only return true if both are true.
  } else {
    return false
  }

}