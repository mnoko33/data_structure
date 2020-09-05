const mergeSort = arr => {
  const sort = (start, mid, end) => {
    let i = start;
    let j = mid+1;
    const temp = [];
    while (i <= mid && j <= end) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        i++;
      } else {
        temp.push(arr[j]);
        j++;
      }
    }
    if (i > mid) {
      while (j <= end) {
        temp.push(arr[j]);
        j++;
      }
    } else {
      while (i <= mid) {
        temp.push(arr[i]);
        i++;
      }
    }
    for (let k = start; k <= end; k++) {
      arr[k] = temp[k-start];
    }
  }
  
  const seperate = (start, end) => {
    if (end - start < 1) return;
    const mid = parseInt((start + end) / 2);
    seperate(start, mid);
    seperate(mid+1, end);
    sort(start, mid, end);
  }

  start = 0;
  end = arr.length - 1;
  seperate(start, end);
}