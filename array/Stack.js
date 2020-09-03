function Stack(n) {
  this.arr = new Array(n);
  this.size = 0;

  this.top = function() {
    if (this.isEmpty()) {
      return null;
    }
    return this.arr[this.size-1];
  }

  this.pop = function() {
    if (this.isEmpty()) {
      throw 'Stack is Empty';
    }
    const result = this.arr[this.size-1];
    this.arr[this.size-1] = undefined;
    this.size--;
    return result;
  }

  this.push = function(v) {
    if (this.size >= n) {
      throw 'Stack is overflow';
    }
    this.size++;
    this.arr[this.size-1] = v;
  }

  this.isEmpty = function() {
    return !this.size;
  }
}