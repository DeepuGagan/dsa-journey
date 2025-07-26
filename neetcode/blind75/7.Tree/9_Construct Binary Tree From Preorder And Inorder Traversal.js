`https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/`


// Approach: Recursion, Preorder & Inorder Traversal
// Time Complexity: O(n), Space Complexity: O(n)
const CBSTFPAIT = (preorder, inorder) => {
  // Map value -> index in inorder for quick lookup
  let inOrderMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
    inOrderMap.set(inOrderMap[i], i)
  }

  let preorderIndex = 0
  const arrayToTree = (left, right) => {
    if (left > right) {
      return null // no elements to construct
    }
    // Root value from preorder
    let rootVal = preorder[preorderIndex]
    preorderIndex++

    // Create the root node
    const root = new TreeNode(rootVal)

    // Split inorder into left and right subtrees
    let inorderIndex = inOrderMap.get(rootVal)

    // Build left subtree
    root.left = arrayToTree(root, left, inorderIndex - 1)

    // Build right subtree
    root.right = arrayToTree(root, inorderIndex + 1, right)

    return root //imp
  }

  return arrayToTree(0, inorder.length - 1)
}