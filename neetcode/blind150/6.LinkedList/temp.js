class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  addFirst(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  addLast(data) {
    const newNode = new Node(data)
    if (!this.head) {
      newNode.next = this.head
      this.head = newNode
      return
    }
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  removeFirst() {
    if (!this.head) return null
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return null
    if (!this.head.next) {
      this.head = null
      return
    }
    let currentNode = this.head
    while (currentNode.next.next) {
      currentNode = currentNode.next
    }
    currentNode.next = null
  }

  size() {
    let count = 0
    let currentNode = this.head
    while (currentNode) {
      currentNode = currentNode.next
      count++
    }
    return count
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error('invalid');
      return
    }
    const newNode = new Node(data)
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }
    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error('invalid');
      return
    }
    if (index === 0) {
      this.head = this.head.next
    }
    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }
    currentNode.next = currentNode.next.next
  }

  print() {
    let values = []
    let currentNode = this.head
    while (currentNode) {
      values.push(currentNode.data)
      currentNode = currentNode.next
    }
    console.log(values.join('->'))
    
  }

}