`https://leetcode.com/problems/binary-tree-level-order-traversal/description/`


const LO = (root) => {
  if (!root) return [] //imp []
  let Q = [root]
  let ret = []

  while (Q.length) {
    let level = []
    let levelLength = Q.length

    for (i = 0; i < levelLength; i++) {
      let current = Q.shift()
      level.push(current)

      if (current.left) Q.push(current.left)
      if (current.right) Q.push(current.right)
    }

    ret.push(level)
  }
}