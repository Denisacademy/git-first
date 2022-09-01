class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  length = 0;

  constructor() {}

  addAtEnd(value) {
    //PUSH
    const node = new Node(value);
    let currentNode = this.head;

    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;
  }

  addAtBegin(value) {
    //SHIFT
    const current = this.head;
    const node = new Node(value);
    this.head = node;
    this.head.next = current;
    this.length++;
  }

  removeFirstNode() {
    const current = this.head;
    this.head = current.next;
    this.length--;
  }

  removeLastNode() {
    let current = this.head;
    let count = 0;
    let previous;

    while (count < this.length - 1) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = null;
    this.length--;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  removeAt(index) {
    let current = this.head;
    let previous;

    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
    //console.log(previous, current)
    this.length -= 1;
  }

  removeFromTo(start, end) {
    let count = 0;
    let current = this.head;
    let prevStart;
    let nextEnd;

    while (count < start) {
      prevStart = current;
      current = current.next;
      count++;
    }

    while (count < end) {
      current = current.next;
      nextEnd = current.next;
      count++;
    }

    this.head = prevStart;
    this.head.next = nextEnd;
    this.length -= end + 1 - start;
    //return [startNode, endNode, prevStart, nextEnd]
  }

  getArrayData() {
    let current = this.head;
    const data = [];
    while (current) {
      data.push(current.data);
      current = current.next;
    }
    return data;
  }

  insertAtNode(value, index) {
    let current = this.head;
    const node = new Node(value);
    let count = 0;
    let previous;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = node;
    node.next = current;

    this.length++;
  }

  searchNodeAt(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  reverse() {
    let count = this.length - 1;
    const data = this.getArrayData();
    this.head = null;

    for (let i = count; i >= 0; i--) {
      this.addAtEnd(data[i]);
    }

    //current = this.searchNodeAt(3);
    //console.log(current)// {data :'sinba'}
    //Node {data: 'React', next: null}
    this.length -= data.length;
  }
}

const list = new LinkedList();

list.addAtEnd('simba');
list.addAtEnd('CSS');
list.addAtEnd('HTML');
list.addAtEnd('React');
list.addAtBegin('Typescript');
