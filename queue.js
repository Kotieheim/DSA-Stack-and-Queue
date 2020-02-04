// Creates a node containing the data and a reference to the next item.
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    // O(1)
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    // make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last === null;
    }
    return node.value;
  }
}

function peek(que) {
  if (!que) {
    return null;
  }
  return que.first;
}

function isEmpty(que) {
  if (!que.first && !que.last) {
    return "Tis Empty";
  }
  return "Tisn't Empty";
}

function display(queue) {
  let currNode = queue.first;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

const maleQueue = new Queue();
const femaleQueue = new Queue();

function squareDancers(dancers) {
  dancers.forEach(dancer => {
    if (dancer[0] === "F") {
      femaleQueue.enqueue(dancer);
    } else {
      maleQueue.enqueue(dancer);
    }
    if (femaleQueue.first && maleQueue.first) {
      let maleDancer = maleQueue.dequeue();
      let femaleDancer = femaleQueue.dequeue();
      console.log(`${maleDancer} paired with ${femaleDancer}`);
    }
  });
  if (maleQueue.length > 0) {
    console.log(`Men waiting to dance:${maleQueue.length}`);
  } else if (femaleQueue.length > 0) {
    console.log(`Females waiting to dance:${femaleQueue.length}`);
  }
}
// squareDancers([
//   "F Jane ",
//   "M Frank ",
//   "M John ",
//   "M Sherlock ",
//   "F Madonna ",
//   "M David ",
//   "F Beyonce "
// ]);
const bankFolk = new Queue();
bankFolk.enqueue("Jane");
bankFolk.enqueue("Frank");
bankFolk.enqueue("John");
bankFolk.enqueue("Sherlock");
bankFolk.enqueue("Madonna");
bankFolk.enqueue("David");
bankFolk.enqueue("Beyonce");

function ophidianBank(que) {
  const random = Math.floor(Math.random() * 100 + 1);
  while (que.length > 0) {
    if (random <= 25) {
      console.log(random);
      let firstInLine = que.first;
      que.dequeue();
      que.enqueue(firstInLine.value);
      console.log(`${firstInLine.value} has gone to the back of the line`);
    } else {
      console.log(`${que.first.value} has been served`);
      que.dequeue;
    }
  }
  return que;
}
// IDK
console.log(ophidianBank(bankFolk));

// const starTreckQ = new Queue();
// starTreckQ.enqueue("Kirk");
// starTreckQ.enqueue("Spock");
// starTreckQ.enqueue("Uhura");
// starTreckQ.enqueue("Sulu");
// starTreckQ.enqueue("Checkov");

// console.log(starTreckQ);

// console.log(peek(starTreckQ));
// const emptyQueue = new Queue();

// console.log(isEmpty(emptyQueue), isEmpty(starTreckQ));
// console.log(display(starTreckQ));
