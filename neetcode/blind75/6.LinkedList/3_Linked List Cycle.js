`https://leetcode.com/problems/linked-list-cycle/description/`


// my method
// Time Complexity: O(n), Space Complexity: O(n)
const LLC = (head) => {
  if (!head) return false

  let nodes = new Set()
  let currentNode = head
  while (currentNode) {
    if (nodes.has(currentNode)) {
      return true
    }
    nodes.add(currentNode)
    currentNode = currentNode.next
  }

  return false
}


// DSA method

// Time Complexity: O(n), Space Complexity: O(1)
const LLC2 = (head) => { //start pointers @same poistion
  if (!head) return false

  let slow = head
  let fast = head

  while (fast && fast.next) { //fast.next && fast.next.next also crt
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }

  return false
}