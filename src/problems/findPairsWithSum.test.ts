import findPairsWithSum from "./findPairsWithSum";

const arrayOfTuplesAreEqual = (
  a1: Array<[number, number]>,
  a2: Array<[number, number]>
): boolean => {
  return (
    a1.length === a2.length &&
    a1.every((t1) =>
      a2.some(
        (t2) =>
          (t1[0] === t2[0] && t1[1] === t2[1]) ||
          (t1[0] === t2[1] && t1[1] === t2[0])
      )
    )
  );
};

describe("findPairsWithSum", () => {
  it("should return empty arrays for numbers with no pairs that sum to the given number", () => {
    expect(findPairsWithSum(5, [])).toEqual([]);
    expect(findPairsWithSum(500, [4, 5, 67, 2, 45, 6])).toEqual([]);
    expect(findPairsWithSum(5, [43, 54, -67, 2, 45, -6])).toEqual([]);
    expect(findPairsWithSum(-5, [-43, 54, -67, 2, 45, 6])).toEqual([]);
  });

  it("should return the pairs of the from the array that sum to the given number", () => {
    expect(
      arrayOfTuplesAreEqual(findPairsWithSum(5, [2, 3]), [[2, 3]])
    ).toEqual(true);
    expect(
      arrayOfTuplesAreEqual(
        findPairsWithSum(500, [
          100,
          300,
          68,
          200,
          500,
          0,
          400,
          300,
          900,
          200,
          94,
        ]),
        [
          [0, 500],
          [100, 400],
          [200, 300],
        ]
      )
    ).toEqual(true);
    expect(
      arrayOfTuplesAreEqual(findPairsWithSum(28, [7, 12, 14, 19, 16, 14]), [
        [12, 16],
        [14, 14],
      ])
    ).toEqual(true);
    expect(
      arrayOfTuplesAreEqual(findPairsWithSum(-5, [-43, -8, 3, 2, 45, 6]), [
        [-8, 3],
      ])
    ).toEqual(true);
  });
});
