`https://leetcode.com/problems/subtree-of-another-tree/`


const SOAT = (root, subtree) => {

    if (!subRoot) return true // An empty tree is a subtree of any tree
    if (!root) return false // A non-empty tree can't be in an empty tree

  const isSameTree = (p, q) => {
    if (!p && !q) return true

    if (p && q && p.val === q.val) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
      return false
    }
  }

  if (isSameTree(root, subroot)) return true

  return SOAT(root.left, subroot) && SOAT(root.right, subroot) // imp donot pass of subroot.[]
}