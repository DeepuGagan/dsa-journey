`https://leetcode.com/problems/merge-two-sorted-lists/`


const MTSL = (list1, list2) => {
  let dummy = { val: 0, next: null }
  let currentNode = dummy // If you dont use this, you lose your reference to the start of the list
  // so now dummy will be head, it stays dummy, while currentNode is just a moving pointer
  if (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode.next = list1
      list1 = list1.next // move to next in list 1
    } else {
      currentNode.next = list2
      list2 = list2.next // move to next in list 2
    }
    currentNode = currentNode.next //move to next in main list (dummy)
  }

  if (list1) { // or use termination 
    currentNode.next = list1
  } else {
    currentNode.next = list2
  }

  return dummy.next

}