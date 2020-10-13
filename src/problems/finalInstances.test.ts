import finalInstances from "./finalInstances";

describe("finalInstances", () => {
  it.each`
    initialInstances       | averageUtil                                        | expectedFinalInstances
    ${1}                   | ${[]}                                              | ${1}
    ${1}                   | ${[10]}                                            | ${1}
    ${7}                   | ${[10]}                                            | ${4}
    ${1}                   | ${[30]}                                            | ${1}
    ${12}                  | ${[86]}                                            | ${24}
    ${1}                   | ${[5, 10, 80]}                                     | ${2}
    ${Math.pow(10, 8)}     | ${[99]}                                            | ${Math.pow(10, 8)}
    ${Math.pow(10, 8) - 1} | ${[99]}                                            | ${Math.pow(10, 8) - 1}
    ${2}                   | ${[25, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 76, 80]} | ${2}
  `(
    "should return a final instance of `$expectedFinalInstances` when the initial instances was `$initialInstances` and the average utilizations of `$averageUtil`",
    ({ initialInstances, averageUtil, expectedFinalInstances }) => {
      expect(finalInstances(initialInstances, averageUtil)).toEqual(
        expectedFinalInstances
      );
    }
  );
});
