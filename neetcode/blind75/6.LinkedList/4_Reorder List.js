`https://leetcode.com/problems/reorder-list/description/`


//my method 
// Time Complexity: O(n), Space Complexity: O(n)
const RL = (head) => {
  let nodes = []
  let currentNode = head

  while (currentNode) {
    nodes.push(currentNode)
    currentNode = currentNode.next
  }

  let l = 0    // lets use 2 pointers
  let r = nodes.length - 1
  while (l < r) {
    nodes[l].next = nodes[r]
    l++
    nodes[r].next = nodes[l]
    r--
  }
  nodes[i].next = null // imp // //last remainder of listing

  return nodes[0]
}


//DSA
// Time Complexity: O(n), Space Complexity: O(1)
const RL2 = (head) => { // f&s can be done with head, but F is +1 (will make 2nd L smaller, if s&f are same @head, 1st will be smaller)
  if (!head || !head.next) return head

  let slow = head
  let fast = head.next
  
  //step 1 - find middle, mid will be @ slow pointer
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  //step 2 - make into 2 list, and then reverse the last list
  let prevNode = null
  let currentNode = slow.next // start of 2nd list
  slow.next = null // breaking list to get 2 list

  while(current){ // reversing 2nd list; after iteration, head will be prevNode 
    let nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = nextNode
  }
  //step 3 - Merge two halves
  let first = head
  let second = prevNode

  while(second){ //second will be less (if odd else same as first)
    let temp1 = first.next
    let temp2 = second.next

    first.next = second
    second.next = temp1

    first = temp1
    second = temp2
  }
  
  return first //you can return or not urwish
}