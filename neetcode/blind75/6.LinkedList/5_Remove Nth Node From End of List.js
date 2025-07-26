`https://leetcode.com/problems/remove-nth-node-from-end-of-list/`

// my method
// Time Complexity: O(n), Space Complexity: O(1)
const RNNFEOL = (head, n) => {
    if (!head || n <= 0) return head
    //step1- reverse
    head = revFn(head) // return prevHead
    //step2 - find Nth from start. ie, new head....remove it
    if (n === 1) {
        head = head.next
    } else {
        let currentNode = head
        for (let i = 1; i < n - 1; i++) { // 1based so, i = 1
            currentNode = currentNode.next
        }
        if (currentNode.next) { // imp condition for leetcode
            currentNode.next = currentNode.next.next
        }
    }
    // step3 - reverse back and return head
    head = revFn(head) // return prevHead
    return head
}


// Time Complexity: O(n), Space Complexity: O(n)
const RNNFEOL2 = (head, n) => {
    let nodes = []
    let currentNode = head
    while (currentNode) {
        nodes.push(currentNode)
        currentNode = currentNode.next
    }

    if (nodes.length === n) { // .length & n both 1 based // so it will be the head
        return head.next  // when equal, remove 1st and return rest
    }

    const indexToRemove = nodes.length - n // 1based, fyi-> further nodes[x] will be 0 based
    nodes[indexToRemove - 1].next = nodes[indexToRemove].next
    // const prevNode = nodes[size - n - 1];
    // prevNode.next = prevNode.next.next;
    return head // return nodes[0]
}

// Time Complexity: O(n), Space Complexity: O(1)
const RNNFEOL3 = (head, n) => {
    const dummy = new ListNode(0)
    dummy.next = head
    
    let slow = head
    let fast = head
    
    // Step 1: Move fast n+1 steps ahead to maintain the gap
    while(n>0){
        fast = fast.next
        n--
    }
    // Step 2: Move both fast and slow until fast reaches end
    while(fast){
        slow = slow.next
        fast = fast.next
    }
    // Step 3: Remove the node, slow will be at a node prev to Nth node
    slow.next = slow.next.next;

    return dummy.next;
}