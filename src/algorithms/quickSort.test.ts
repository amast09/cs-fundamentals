import quickSort from "./quickSort";

describe("quickSort", () => {
  it.each`
    unsortedList                    | sortedList
    ${[]}                           | ${[]}
    ${[1]}                          | ${[1]}
    ${[1, -1, 0]}                   | ${[-1, 0, 1]}
    ${[0, 1, -1, 0]}                | ${[-1, 0, 0, 1]}
    ${[5, 2, 3, 1]}                 | ${[1, 2, 3, 5]}
    ${[5, 2, 7, 3, 1]}              | ${[1, 2, 3, 5, 7]}
    ${[6, 3, 2, 1, 9, 5, 7, 8, 15]} | ${[1, 2, 3, 5, 6, 7, 8, 9, 15]}
  `(
    "sorts the list `$unsortedList` to `$sortedList`",
    ({ unsortedList, sortedList }) => {
      expect(quickSort(unsortedList)).toEqual(sortedList);
    }
  );
});
