function Deque() {
  function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  this.head = null;
  this.tail = null;
  this.size = 0;

  this.qsize = function() {
    return this.size;
  }

  this.push = function(data) {
    const newNode = new Node(data);
    this.size++;
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  this.pushleft = function(data) {
    const newNode = new Node(data);
    this.size++;
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  this.pop = function() {
    if (this.qsize()) {
      this.size--;
      const prevTail = this.tail;
      if (prevTail.prev) {
        this.tail = prevTail.prev;
        this.tail.next = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      return prevTail.value;
    } else {
      throw 'Queue is Emtpy'
    }
  }

  this.popleft = function() {
    if (this.qsize()) {
      this.size--;
      const prevHead = this.head;
      this.head = prevHead.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return prevHead.value;
    } else {
      throw 'Queue is Empty';
    }
  }

  this.print = function() {
    const result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}
