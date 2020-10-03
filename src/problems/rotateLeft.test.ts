import rotateLeft from "./rotateLeft";

describe("getWordHighlightArea", () => {
  it.each`
    arrayBeforeRotations | numberOfRotations | expectedArrayAfterRotations
    ${[]}                | ${5}              | ${[]}
    ${[1, 2, 3]}         | ${0}              | ${[1, 2, 3]}
    ${[1, 2, 3, 4, 5]}   | ${2}              | ${[3, 4, 5, 1, 2]}
    ${[1, 2, 3, 4, 5]}   | ${4}              | ${[5, 1, 2, 3, 4]}
    ${[1, 2, 3, 4, 5]}   | ${25}             | ${[1, 2, 3, 4, 5]}
    ${[1, 2, 3]}         | ${5}              | ${[3, 1, 2]}
  `(
    "should return `$expectedArrayAfterRotations` after left rotating the array `$arrayBeforeRotations` `$numberOfRotations` times",
    ({
      arrayBeforeRotations,
      numberOfRotations,
      expectedArrayAfterRotations,
    }) => {
      expect(rotateLeft(arrayBeforeRotations, numberOfRotations)).toEqual(
        expectedArrayAfterRotations
      );
    }
  );
});
