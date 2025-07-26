`https://leetcode.com/problems/validate-binary-search-tree/`


const isValidBST = (root, left, right) => {
  if (!root) return true

  if (!(left < root.val && root.val < right)) {
    // (left<root.value && root.value < right) is valid BST, so negate it !, now its not
    return false
  }
  return isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val, right)
}

const VBST = (root) => {
  return isValidBST(root, -Infinity, Infinity)
}

