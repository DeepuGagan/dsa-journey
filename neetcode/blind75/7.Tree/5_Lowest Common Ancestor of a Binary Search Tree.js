`https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/`


const LCA = (root, p, q) => {
  if (!root || !p || !q) return null // not required as LeetCode guarantees valid input=> root, p, and q will be non-null.

  if (root.val < p && root.val < q) { // LCA lies on left
    return LCA(root.left, p, q)
  } else if (root.val > p && root.val > q) { // LCA lies on right
    return LCA(root.right, p, q)
  } else { // LCA lies on curretn node, 
    return root
  }
}