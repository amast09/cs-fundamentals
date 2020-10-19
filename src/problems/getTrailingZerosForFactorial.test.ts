import getTrailingZerosForFactorial from "./getTrailingZerosForFactorial";

describe("getTrailingZerosForFactorial", () => {
  it.each`
    factorial | expectedTrailing0s
    ${1}      | ${0}
    ${3}      | ${0}
    ${5}      | ${1}
    ${6}      | ${1}
    ${10}     | ${2}
    ${13}     | ${2}
    ${15}     | ${3}
    ${18}     | ${3}
    ${20}     | ${4}
    ${23}     | ${4}
    ${25}     | ${6}
    ${28}     | ${6}
    ${30}     | ${7}
  `(
    "should return `$expectedTrailing0s` for `$factorial` factorial",
    ({ factorial, expectedTrailing0s }) => {
      expect(getTrailingZerosForFactorial(factorial)).toEqual(
        expectedTrailing0s
      );
    }
  );
});
