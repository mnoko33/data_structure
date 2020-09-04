const Node = require('./Node');

function DoubleLinkedList() {
  this._head = null;
  this._tail = null;
  this._size = 0;

  this.size = () => {
    return this._size;
  }

  this.isEmpty = () => {
    return this.size() === 0;
  }

  this.add = v => {
    let node = this._tail;
    const newNode = new Node(v);
    this._size++;
    if (node) {
      node.next = newNode;
      newNode.prev = node;
      this._tail = newNode;
    } else {
      this._tail = newNode;
      this._head = newNode;
    }
  }

  this.addFirst = v => {
    let node = this._head;
    const newNode = new Node(v);
    this._size++;
    if (node) {
      newNode.next = node;
      node.prev = newNode;
      this._head = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }
  }

  this.pop = () => {
    if (this.isEmpty()) throw 'List is Empty';
    const node = this._tail;
    if (node.prev) {
      this._tail = node.prev;
      node.prev.next = null;
    } else {
      this._head = null;
      this._tail = null;
    }
    return node.data;
  }

  this.print = () => {
    const result = [];
    let node = this._head;
    while (node) {
      result.push(node.info());
      node = node.next;
    }
    console.log(result);
  }
}
