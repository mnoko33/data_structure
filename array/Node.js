function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
  this.info = () => {
    return {
      data: this.data,
      next: this.next ? this.next.data : null,
      prev: this.prev ? this.prev.data : null,
    }
  }
}


module.exports = Node;