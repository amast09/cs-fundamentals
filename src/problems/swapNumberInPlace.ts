const swapValues = (
  idxWithGreaterValue: number,
  idxWithLesserValue: number,
  list: number[]
): void => {
  list[idxWithGreaterValue] =
    list[idxWithGreaterValue] - list[idxWithLesserValue];
  list[idxWithLesserValue] =
    list[idxWithLesserValue] + list[idxWithGreaterValue];
  list[idxWithGreaterValue] =
    list[idxWithLesserValue] - list[idxWithGreaterValue];
};

const swapNumberInPlace = (
  idx1: number,
  idx2: number,
  list: number[]
): void => {
  if (list[idx1] !== undefined && list[idx2] !== undefined) {
    if (list[idx1] > list[idx2]) {
      swapValues(idx1, idx2, list);
    } else {
      swapValues(idx2, idx1, list);
    }
  }
};

export default swapNumberInPlace;
