class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LL{
  constructor(){
    this.head = null
  }

  addFirst(val){
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
  }

  addLast(val){
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode
    }
    let currentNode = this.head
    while(currentNode.next){
      currentNode  = currentNode.next
    }
    currentNode.next = newNode
  }

  removeFirest(){
    if(!head) return 
    this.head = this.head.next
  }

  removeLast(){
    if(!head) return
    if(!head.next){
      this.head = null
      return
    }
    let currentNode = this.head
    while(current.next.next){
      currentNode = currentNode.next
    }
    currentNode.next = null
  }

  size(){
    let currentNode = this.head
    let count = 0
    if(currentNode){
      count++
      currentNode = currentNode.next
    }
  }

  addAt(val,index){
    if(index < 0 || index > size()) return 'invalid'
    const newNode = new Node(val)
    if(index === 0){
      currentNode.next = this.head
      this.head = currentNode
    }

    let currentNode = new Node(val)
    for(let i = 0 ; i<index-1;i++){
      currentNode = currentNode.next
    }

    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  removeAt(index){
    if (index < 0 || index > size()) return 'invalid'
    if(index ===0){
      this.head = this.head.next
    }
    let currentNode = this.head
    for(let i = 0; i<index-1;i++){
      currentNode = currentNode.next
    }
    currentNode.next = currentNode.next.next
  }

  print(){
    let values = []
    let currentNode = this.head
    while(currentNode){
      values.push(currentNode.val)
      currentNode = currentNode.next
    }
    return values.join('->')
  }

}















// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null
//   }

//   addFirst(value) {
//     const newNode = new Node(value)
//     newNode.next = this.head
//     this.head = newNode
//   }

//   addLast(value) {
//     const newNode = new Node(value)
//     if (!this.head) {
//       this.head = newNode
//       return
//     }

//     let currentNode = this.head
//     while (currentNode.next) {
//       currentNode = currentNode.next
//     }
//     currentNode.next = newNode
//   }

//   removeFirst() {
//     if (!this.head) return
//     this.head = this.head.next
//   }

//   removeLast() {
//     if (!this.head) return
//     if (!this.head.next) {
//       this.head = null
//       return
//     }
//     let currentNode = this.head
//     while (currentNode.next.next) {
//       currentNode = currentNode.next
//     }
//     currentNode.next = null
//   }

//   size() {
//     let count = 0
//     let currentNode = this.head
//     while (currentNode) {
//       count++
//       currentNode = currentNode.next
//     }
//     return count
//   }

//   addAt(value, index) {
//     if (index > this.size() || index < 0) {
//       console.error('invalid idx')
//       return
//     }
//     const newNode = new Node(value)
//     if (index === 0) {
//       newNode.next = this.head
//       this.head = newNode
//       return
//     }
//     let currentNode = this.head
//     let i = 0 //or forloop
//     while (i < index - 1) {
//       currentNode = currentNode.next
//       i++
//     }
//     newNode.next = currentNode.next
//     currentNode.next = newNode
//   }

//   removeAt(index) {
//     if (index < 0 || index >= this.size()) { // cant remove at last digit of size as LL is 0 based
//       console.error('bruhh');
//       return
//     }
//     if (index === 0) {
//       this.head = this.head.next
//       return
//     }
//     let currentNode = this.head
//     for (let i = 0; i < index - 1; i++) { // need to stop before index, so index - 1, as we use .next on each iteration, we dnt need the actual prev of index(<=), coz if do that curretn will point to index to be removed so we use (<) so that it will be a step back
//       currentNode = currentNode.next
//     }
//     currentNode.next = currentNode.next.next
//   }

//   print() {
//     let values = []
//     let currentNode = this.head
//     while (currentNode) {
//       values.push(currentNode.val)
//       currentNode = currentNode.next
//     }
//     console.log(values.join('->'));
//   }

// }





























// //Singly linked list

// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null
//   }

//   addFirst(data) {
//     const newNode = new Node(data)
//     newNode.next = this.head
//     this.head = newNode
//   }

//   addLast(data) {
//     const newNode = new Node(data)
//     if (!this.head) {
//       this.head = newNode
//       return
//     }
//     let currentNode = this.head
//     while (currentNode.next) {
//       currentNode = currentNode.next
//     }
//     currentNode.next = newNode
//   }

//   removeFirst() {
//     if (!this.head) return null
//     this.head = this.head.next
//   }

//   removeLast() {
//     if (!this.head) return null; // Empty list

//     if (!this.head.next) {
//       // Only one element
//       this.head = null;
//       return;
//     }
//     let currentNode = this.head
//     while (currentNode.next.next) {
//       currentNode = currentNode.next
//     }
//     currentNode.next = null
//   }


//   size() {
//     let count = 0
//     let currentNode = this.head
//     while (currentNode) {
//       count++
//       currentNode = currentNode.next
//     }
//     return count
//   }

//   addAt(index, data) {
//     if (index < 0 || index > this.size()) {
//       console.error('invalid index')
//       return
//     }
//     const newNode = new Node(data)
//     if (index === 0) {
//       newNode.next = this.head
//       this.head = newNode
//       return
//     }

//     let currentNode = this.head
//     for (let i = 0; i <= index - 1; i++) {
//       currentNode = currentNode.next
//     }
//     newNode.next = currentNode.next
//     currentNode.next = newNode
//   }


//   removeAt(index) {
//     if (index < 0 || index > this.size()) {
//       console.error('invalid index')
//       return
//     }

//     if (index === 0) {
//       this.head = this.head.next
//     }

//     let currentNode = this.head
//     for (let i = 0; i <= index - 1; i++) {
//       currentNode = currentNode.next
//     }
//     currentNode.next = currentNode.next.next
//   }

//   print() {
//     let values = []
//     let currentNode = this.head
//     while (currentNode) {
//       values.push(currentNode)
//       currentNode = currentNode.next
//     }
//     console.log(values.join(' -> '))
//   }

// }

// /**
//  * ⚠️ The confusion:
// You’re thinking:

// “If I want to stop at i - 1, and I’m looping up to i, shouldn’t I use <= so it includes that stop?”

// But here's the twist:

// 👉 The loop is about how many times you move forward, not about stopping at exact index by value.
//  */