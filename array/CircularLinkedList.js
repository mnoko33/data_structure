const Node = require('./Node');

function CircularLinkedList() {
  this.head = null;

  this.add = (v) => {
    if (this.head) {
      let node = this.head;
      while (node.next !== this.head) {
        node = node.next;
      }
      const newNode = new Node(v);
      newNode.next = node.next;
      node.next = newNode;
    } else {
      this.head = new Node(v);
      this.head.next = this.head;
    }
  }

  this.delete = v => {
    if (!this.head) {
      throw 'List is Empty';
    } else {
      if (this.head == this.head) {
        this.head = null;
        return;
      }
      let prev = null;
      let node = this.head;
      while (node.data !== v) {
        prev = node;
        node = node.next;
        if (node === this.head) {
          return;
        }
      }
      if (prev) {
        prev.next = node.next;
      } else {
        let node = this.head;
        while (node.next !== this.head) {
          node = node.next
        }
        this.head = this.head.next;
        node.next = this.head;
      }
    }
  }

  this.print = () => {
    if (!this.head) {
      console.log([]);
      return;
    }
    const result = [];
    node = this.head;
    result.push(node.data);
    while (node.next !== this.head) {
      node = node.next;
      result.push(node.data);
    }
    console.log(result);
  }
}