function countingSort(rangeOfValues: number, list: number[]): number[] {
  const counts = Array.from({ length: rangeOfValues }, () => 0);
  const sortedArray = [];

  // Get counts
  for (let i = 0; i < list.length; i++) {
    counts[list[i]] += 1;
  }

  // Get running the running sum of counts
  for (let i = 1; i < counts.length; i++) {
    counts[i] = counts[i] + counts[i - 1];
  }

  // Place items into sorted array
  for (let i = list.length - 1; i >= 0; i--) {
    counts[list[i]] -= 1;
    sortedArray[counts[list[i]]] = list[i];
  }

  return sortedArray;
}

export default countingSort;
