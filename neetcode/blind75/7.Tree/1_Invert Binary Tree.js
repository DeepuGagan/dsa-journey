`https://leetcode.com/problems/invert-binary-tree/`


/**
✅ What You Can Say in an Interview
"I’ll start with recursive DFS since it’s clean and natural for this problem. But if this were a massive unbalanced tree or we hit stack issues, I’d switch to an iterative version with a stack."

"This problem asks for the shortest path, so BFS is better since it finds that in unweighted trees/graphs."
 */


// Approach: DFS (Depth-First Search), Recursion
// Time Complexity: O(n), Space Complexity: O(h) (h = height of tree, due to recursion stack)
const IBT = (root) => {
  if (!root) return null

  [root.left, root.right] = [root.right, root.left] //also can be done via temp
  IBT(root.left)
  IBT(root.right)
  return root
}