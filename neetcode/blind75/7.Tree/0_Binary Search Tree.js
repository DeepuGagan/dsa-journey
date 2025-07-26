// Node class for BST. Space: O(1) per node
class Node {
  constructor(val) { //A constructor function is a special type of function in JavaScript that's used to create and initialize new objects. Unlike regular functions, which just perform a set of actions, constructor functions are designed to set up an object's initial state.
    this.val = val
    this.left = null
    this.right = null
  }
}

// Binary Search Tree class. Most operations (search, insert, delete): Average Time O(log n), Worst Time O(n); Space: O(n)
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return !this.root
  }

  insert(val) {
    const newNode = new Node(val)
    if (this.isEmpty()) {
      this.root = newNode
      return
    }
    this.insertNode(this.root, newNode)
  }

  insertNode(root, newNode) {
    if (newNode.val < root.val) {
      if (!root.left) {
        root.left = newNode
      } else {
        return this.insertNode(root.left, newNode)
      }
    } else {
      if (!root.right) {
        root.right = newNode
      } else {
        return this.insertNode(root.right, newNode)
      }
    }
  }

  search(val) {
    return this.searchNode(this.root, val)
  }

  searchNode(root, val) {
    if (!root) {
      return false
    }
    if (val === root.val) {
      return true
    } else if (val < root.val) {
      return this.searchNode(root.left, val)
    } else {
      return this.searchNode(root.right, val)
    }
  }

  preOrder(root) { // Preorder (Root → Left → Right) 
    if (root) {
      console.log(root.val)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
  inOrder(root) { // Inorder (Left → Root → Right) 
    if (root) {
      this.inOrder(root.left)
      console.log(root.val)
      this.inOrder(root.right)
    }
  }
  postOrder(root) { // Postorder (Left → Right → Root) 
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.val)
    }
  }

  levelOrder() {
    if (!this.root) return  // this.root -> not consistent
    let Q = [this.root] // or keep [] then, Q.push(this.root)

    while (Q.length) {
      let current = Q.shift()
      console.log(current.val)
      if (current.left) Q.push(current.left)
      if (current.right) Q.push(current.right)
    }
  }

  min(root) {
    if (!root.left) {
      return root // root.val, but need noode for delete
    }
    return this.min(root.left)
  }

  max(root) {
    if (!root.right) {
      return root.val
    }
    return this.max(root.right)
  }

  deleteNode(root, val) {
    if (!root) return null

    if (val < root.val) {
      root.left = this.deleteNode(root.left, val) // 🛠 Update left pointer
    } else if (val > root.val) {
      root.right = this.deleteNode(root.right, val) // 🛠 Update right pointer
    } else {    // 🎯 Node found: handle 3 cases
      // Case 1: No children
      if (!root.left && !root.right) return null

      // Case 2: One child
      if (!root.left) return root.right
      if (!root.right) return root.left

      // Case 3: Two children
      let successor = this.min(root.right)
      root.val = successor.val
      root.right = this.deleteNode(root.right, successor.val) // Recursively delete successor // as tehre will be 2 same after deleting the node of given in Q
    }
    return root
  }
}
