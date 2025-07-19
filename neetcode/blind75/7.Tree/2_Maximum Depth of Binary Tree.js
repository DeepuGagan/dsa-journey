`https://leetcode.com/problems/maximum-depth-of-binary-tree/`


const MDOBT = (root) => {
  if(!root) return 0 // max depth of empty node is 0

  return 1 + Math.max( MDOBT(root.left) , MDOBT(root.right) ) // 1 for root node
}