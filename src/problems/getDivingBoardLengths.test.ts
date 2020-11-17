import getDivingBoardLengths from "./getDivingBoardLengths";

describe("getDivingBoardLengths", () => {
  it.each`
    shorterBoardLength | longerBoardLength | numberOfBoards | expectedDifferentDivingBoardLengths
    ${2}               | ${3}              | ${0}           | ${[]}
    ${2}               | ${3}              | ${1}           | ${[2, 3]}
    ${2}               | ${3}              | ${2}           | ${[4, 5, 6]}
    ${2}               | ${3}              | ${3}           | ${[6, 7, 8, 9]}
    ${2}               | ${3}              | ${4}           | ${[8, 9, 10, 11, 12]}
    ${2}               | ${3}              | ${5}           | ${[10, 11, 12, 13, 14, 15]}
    ${2}               | ${2}              | ${5}           | ${[10]}
    ${1}               | ${9}              | ${0}           | ${[]}
    ${1}               | ${9}              | ${1}           | ${[1, 9]}
    ${1}               | ${9}              | ${2}           | ${[2, 10, 18]}
    ${1}               | ${9}              | ${3}           | ${[3, 11, 19, 27]}
    ${1}               | ${9}              | ${4}           | ${[4, 12, 20, 28, 36]}
    ${1}               | ${9}              | ${5}           | ${[5, 13, 21, 29, 37, 45]}
    ${9}               | ${9}              | ${5}           | ${[45]}
  `(
    "should return `$expectedDifferentDivingBoardLengths` for `(s=$shorterBoardLength,l=$longerBoardLength,n=$numberOfBoards)`",
    ({
      shorterBoardLength,
      longerBoardLength,
      numberOfBoards,
      expectedDifferentDivingBoardLengths,
    }) => {
      expect(
        getDivingBoardLengths({
          shorterBoardLength,
          longerBoardLength,
          numberOfBoards,
        })
      ).toEqual(expectedDifferentDivingBoardLengths);
    }
  );
});
