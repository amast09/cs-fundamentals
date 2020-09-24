import mergeSort from "./mergeSort";

describe("mergeSort", () => {
  it.each`
    unsortedList       | sortedList
    ${[]}              | ${[]}
    ${[1]}             | ${[1]}
    ${[1, -1, 0]}      | ${[-1, 0, 1]}
    ${[0, 1, -1, 0]}   | ${[-1, 0, 0, 1]}
    ${[5, 2, 3, 1]}    | ${[1, 2, 3, 5]}
    ${[5, 2, 7, 3, 1]} | ${[1, 2, 3, 5, 7]}
  `(
    "sorts the list `$unsortedList` to `$sortedList`",
    ({ unsortedList, sortedList }) => {
      expect(mergeSort(unsortedList)).toEqual(sortedList);
    }
  );
});
