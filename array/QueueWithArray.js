// 배열로 만든 Queue
function QueueWithArray(n) {
  this.arr = new Array(n);
  this.size = n;

  this.qsize = function() {
    return this.arr.length;
  }

  this.enqueue = function(data) {
    if (this.qsize() >= this.size) {
      throw 'Queue is full';
    }
    this.arr.push(data);
    this.size++;
  }

  this.dequeue = function() {
    if (this.size == 0) {
      throw 'Queue is Empty';
    }
    this.size--;
    return this.arr.shift();
  }
}