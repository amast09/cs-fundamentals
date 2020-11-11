import getCalculatorResult from "./getCalculatorResult";

describe("getCalculatorResult", () => {
  it.each`
    expression        | expectedResult
    ${""}             | ${0}
    ${"2*3"}          | ${2 * 3}
    ${"2*3*7"}        | ${2 * 3 * 7}
    ${"2*3/4"}        | ${(2 * 3) / 4}
    ${"2*3+4"}        | ${2 * 3 + 4}
    ${"3+2*3/4"}      | ${3 + (2 * 3) / 4}
    ${"2-3"}          | ${2 - 3}
    ${"2/3*4"}        | ${(2 / 3) * 4}
    ${"2+3-4"}        | ${2 + 3 - 4}
    ${"2*3+5/6*3+15"} | ${2 * 3 + (5 / 6) * 3 + 15}
  `(
    "should return `$expectedResult` for the expression `$expression`",
    ({ expression, expectedResult }) => {
      expect(getCalculatorResult(expression)).toEqual(expectedResult);
    }
  );
});
