import countingSort from "./countingSort";

describe("countingSort", () => {
  it.each`
    unsortedList                    | sortedList
    ${[]}                           | ${[]}
    ${[1]}                          | ${[1]}
    ${[1, 8, 0]}                    | ${[0, 1, 8]}
    ${[0, 1, 4, 0]}                 | ${[0, 0, 1, 4]}
    ${[5, 2, 3, 1]}                 | ${[1, 2, 3, 5]}
    ${[5, 2, 7, 3, 1]}              | ${[1, 2, 3, 5, 7]}
    ${[6, 3, 2, 1, 9, 5, 7, 8, 15]} | ${[1, 2, 3, 5, 6, 7, 8, 9, 15]}
  `(
    "sorts the list `$unsortedList` to `$sortedList`",
    ({ unsortedList, sortedList }) => {
      expect(countingSort(16, unsortedList)).toEqual(sortedList);
    }
  );
});
