const quickSort = arr => {
  const sort = (left, right) => {
    if (right - left < 1) return;

    const pivotIdx = parseInt((left + right) / 2);
    const pivot = arr[pivotIdx]
    low = left;
    high = right;
    while (low < high) {
      while (arr[low] < pivot && low < right) low++;
      while (pivot < arr[high] && left < high) high--;

      if (low >= high) break;
      [arr[low], arr[high]] = [arr[high], arr[low]]
      low++;
      high--;
    }
    sort(left, high);
    sort(high+1, right);
  }

  sort(0, arr.length-1);
}