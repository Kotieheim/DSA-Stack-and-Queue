class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    // O(1)
    /* If the stack is empty, then the node will be the top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    /*If the stack already has something, then create a new node, add data to the new node, and have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    // O(1)
    /* In order to remove the top of the stack, you have to point the pointer to the next item and that next item becomes the top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function peek(stack) {
  // returns top of stack data
  if (this.top === null) {
    return "Empty stack";
  } else {
    return stack.top.data;
  }
}

function isEmpty(stack) {
  // checks if the stack is empty
  if (stack.top === null) {
    return "stack is empty";
  } else {
    return "stack has stuff";
  }
}
function display(stack) {
  isEmpty(stack);
  node = stack.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverseStack = new Stack();

  for (let i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
    reverseStack.push(s.charAt(i));
  }
  for (let j = 0; j < s.length; j++) {
    console.log(reverseStack.pop(), s[j]);
    if (s[j] === reverseStack.pop()) continue;
    else return false;
  }
  return true;
}

function parentheses(str) {
  const newStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") newStack.push(str[i]);
    if (str[i] === ")") {
      if (newStack.pop() === null) return false;
    }
  }
  return newStack.top === null;
}

function SortStack() {}

console.log(parentheses("((()))"));

const starTreck = new Stack();
starTreck.push("Kirk");
starTreck.push("Spock");
starTreck.push("McCoy");
starTreck.push("Scotty");

// console.log(starTreck);
// console.log(peek(starTreck));
// console.log(isEmpty(starTreck));
// console.log(display(starTreck));
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
