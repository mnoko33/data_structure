// 링크드리스트로 만든 Queue
function QueueWithLinkedList() {
  function Node(v) {
    this.value = v;
    this.next = null;
  }
  
  this.head = null;
  this.size = 0;

  this.qsize = function() {
    return this.size;
  }

  this.enqueue = function(data) {
    this.size++;
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next= new Node(data);;
    } else {
      this.head = new Node(data);;
    }
  }

  this.dequeue = function() {
    if (this.qsize() <= 0) {
      throw 'Queue is Empty';
    }
    const prevHead = this.head;
    this.head = prevHead.next;
    this.size--;
    return prevHead.value;
  }
}