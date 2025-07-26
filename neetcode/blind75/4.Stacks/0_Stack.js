// Time Complexity: O(1) for push, pop, peek, isEmpty, size; Space Complexity: O(n)
class Stack {
  constructor() {
    this.items = [];
  }

  // Push an item onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an item off the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    return this.items.pop();
  }

  // Peek at the top item
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack
  printStack() {
    return this.items.join(" ");
  }
}

// Example usage
const stack = new Stack();