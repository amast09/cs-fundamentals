interface QuickSortSubListParams {
  fullList: number[];
  pivotValue: number;
  listStartIndex: number;
  listEndIndex: number;
}

const quickSortSubList = (params: QuickSortSubListParams): number => {
  const { fullList, pivotValue, listStartIndex, listEndIndex } = params;
  let leftIndex = listStartIndex;
  let rightIndex = listEndIndex;

  while (leftIndex <= rightIndex) {
    const leftValue = fullList[leftIndex];
    const rightValue = fullList[rightIndex];
    const leftValueCanBeSwapped = leftValue >= pivotValue;
    const rightValueCanBeSwapped = rightValue <= pivotValue;

    if (leftValueCanBeSwapped && rightValueCanBeSwapped) {
      fullList[rightIndex] = leftValue;
      fullList[leftIndex] = rightValue;

      leftIndex += 1;
      rightIndex -= 1;
    } else if (leftValueCanBeSwapped) {
      rightIndex -= 1;
    } else if (rightValueCanBeSwapped) {
      leftIndex += 1;
    } else {
      leftIndex += 1;
      rightIndex -= 1;
    }
  }

  return leftIndex;
};

interface QuickSortRecursiveParams {
  fullList: number[];
  listStartIndex: number;
  listEndIndex: number;
}

const quickSortRecursive = (params: QuickSortRecursiveParams): number[] => {
  const { fullList, listStartIndex, listEndIndex } = params;

  // if list is empty or only has a single element, then we are sorted
  if (listStartIndex < listEndIndex) {
    const pivotIndex = Math.floor((listEndIndex + listStartIndex) / 2);
    const pivotValue = fullList[pivotIndex];

    const partitionedMiddleIndex = quickSortSubList({
      fullList,
      pivotValue,
      listStartIndex,
      listEndIndex,
    });

    const leftListStartIndex = listStartIndex;
    const leftListEndIndex = partitionedMiddleIndex - 1;
    const rightListStartIndex = partitionedMiddleIndex;
    const rightListEndIndex = listEndIndex;

    quickSortRecursive({
      fullList,
      listStartIndex: leftListStartIndex,
      listEndIndex: leftListEndIndex,
    });

    quickSortRecursive({
      fullList,
      listStartIndex: rightListStartIndex,
      listEndIndex: rightListEndIndex,
    });
  }

  return fullList;
};

// Time Complexity: O(n log n) average, n^2 worst case if bad pivots chosen
function quickSort(list: number[]): number[] {
  return quickSortRecursive({
    fullList: list,
    listStartIndex: 0,
    listEndIndex: list.length - 1,
  });
}

export default quickSort;
