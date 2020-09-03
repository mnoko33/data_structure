const selectionSort = arr => {
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    let idx = i;
    let value = arr[i];
    for (let j = i+1; j < N; j++) {
      if (arr[j] < value) {
        idx = j;
        value = arr[j];
      }
    }
    if (idx != i) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
  }
}