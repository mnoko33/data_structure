const Node = require('./Node');

function LinkedList() {
  this._head = null;
  this._size = 0;

  this.size = () => {
    return this._size;
  }

  this.add = v => {
    this._size++;
    let node = this._head;
    if (node === null) {
      this._head = new Node(v);
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(v);
  }

  this.addFirst = v => {
    this._size++
    const prevHead = this._head;
    this._head = new Node(v);
    this._head.next = prevHead;
  }

  this.contains = v => {
    let node = this._head;
    while (node) {
      if (node.data === v) return true;
      node = node.next;
    }
    return false;
  }

  this.isEmpty = () => {
    return this._size === 0;
  }

  this.get = idx => {
    if (idx > this._size - 1) throw 'Out of Index';
    let node = this._head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }

  this.indexOf = v => {
    let node = this._head;
    let idx = 0;
    while (node) {
      if (node.data === v) return idx;
      node = node.next;
      idx++;
    }
    return -1;
  }

  this.pop = () => {
    if (this.isEmpty()) throw 'List is Empty';
    if (this._size === 1) {
      const node = this._head;
      this._head = null;
      this._size--;
      return node.data;
    }
    const lastIdx = this._size-1;
    const node = this.get(lastIdx-1);
    const v = node.next.data;
    node.next = null;
    this._size--;
    return v;
  }

  this.remove = v => {
    let prev = null;
    let node = this._head;
    while (node) {
      if (node.data === v) {
        this._size--;
        if (prev) {
          prev.next = node.next;
        } else {
          this._head = node.next;
        }
      }
      prev = node;
      node = node.next;
    }
  }

  this.print = () => {
    const result = [];
    let node = this._head;
    while (node) {
      result.push(node.data);
      node = node.next;
    }
    console.log(result);
  }
}