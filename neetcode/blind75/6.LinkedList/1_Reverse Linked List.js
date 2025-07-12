`https://leetcode.com/problems/reverse-linked-list/submissions/1664183449/`
/**
 var reverseList = function(head) {
    if (!head) return null;

    // Step 1: Push all nodes into an array
    let nodes = [];
    let current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }

    // Step 2: Reverse the pointers
    for (let i = nodes.length - 1; i > 0; i--) {
        nodes[i].next = nodes[i - 1]; // Point current node to previous one
    }

    // Step 3: Set the new tail's next to null
    nodes[0].next = null;

    // Step 4: Return new head (last node in original list)
    return nodes[nodes.length - 1];
};
 */

// my method

const RLL = (head) => {
  if (!head) return null // imp for LL probs
  let nodes = []
  let currentNode = head
  while (currentNode) {
    nodes.push(currentNode)
    currentNode = currentNode.next
  }

  for (let i = 1; i < nodes.length; i++) { // for (let i = nodes.length - 1; i> 0; i--) {
    nodes[i].next = nodes[i - 1]       //     nodes[i].next = nodes[i - 1]   
  }                                  // }

  nodes[0].next = null //imp
  return nodes[nodes.length - 1]

}

// DSA method

const RLL2 = (head) => {
  let prevNode = null
  let currentNode = head

  while (currentNode) {
    let nextNode = currentNode.next
    currentNode.next = prevNode // direction change
    prevNode = currentNode
    currentNode = nextNode
  }

  return prevNode
}

// Rec method

const RLL3 = head => {
  if (!head || !head.next) return null

  let newHead = RLL3(head.next)
  head.next.next = head  // point to it reversly
  head.next = null  //cut earlier link

  return newHead
}