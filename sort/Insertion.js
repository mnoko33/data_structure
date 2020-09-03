const insertionSort = arr => {
  const N = arr.length;
  for (let i = 1; i < N; i++) {
    const v = arr[i];
    let j = i-1;
    while (j >= 0 && arr[j] > v) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = v;
  }
}