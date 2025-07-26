`https://leetcode.com/problems/kth-smallest-element-in-a-bst/`

// my method
const KSEIAB = (root, k) => {
  let inOrderValues = []
  const inOrder = (root) => {
    if(root){
      inOrder(root.left)
      inOrderValues.push(root.val)
      inOrder(root.right)
    }
  }
  inOrder(root)
  return inOrderValues[k - 1]
}


// DSA

const KSEIAB2 = (root, k) => {
  let KthValue
  const inOrderUntilK = (root) => {
    if (!root) return
    inOrderUntilK(root.left)
    k--
    if (k === 0) {
      KthValue = root.val
    }
    inOrderUntilK(root.right)
  }
  inOrderUntilK(root)
  return KthValue
} 

// 🟥 1️⃣ Problem: KthValue is passed by value
// In JavaScript:
// When you pass a primitive (like null, undefined), you pass it by value.
// So KthValue = root.val inside inOrderUntilK() does not update the outer variable ret.

// ✅ How to fix:
// Use a closure variable (let result = null) declared outside the recursion.
// Or pass an object ({value: null}) to hold the result reference.
// here, i just didnt use any new fn outside scope, so no prblm on this

