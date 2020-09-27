function mergeArrays(array1: number[], array2: number[]): number[] {
  const mergedSortedArray = [];

  let array1Index = 0;
  let array2Index = 0;
  while (array1.length > array1Index || array2.length > array2Index) {
    const array1Value = array1[array1Index];
    const array2Value = array2[array2Index];

    if (array1Value !== undefined && array2Value !== undefined) {
      if (array1Value < array2Value) {
        mergedSortedArray.push(array1Value);
        array1Index += 1;
      } else {
        mergedSortedArray.push(array2Value);
        array2Index += 1;
      }
    } else if (array1Value !== undefined) {
      mergedSortedArray.push(array1Value);
      array1Index += 1;
    } else {
      mergedSortedArray.push(array2Value);
      array2Index += 1;
    }
  }

  return mergedSortedArray;
}

// Time Complexity: O(n log n)
// Space Complexity: O(n)
function mergeSort(list: number[]): number[] {
  if (list.length < 2) {
    return list;
  } else {
    const pivotIndex = Math.floor(list.length / 2);
    const unsortedLeftHalf = list.slice(0, pivotIndex);
    const unsortedRightHalf = list.slice(pivotIndex, list.length);

    const sortedLeft = mergeSort(unsortedLeftHalf);
    const sortedRight = mergeSort(unsortedRightHalf);

    return mergeArrays(sortedLeft, sortedRight);
  }
}

export default mergeSort;
