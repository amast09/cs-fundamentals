import swapNumberInPlace from "./swapNumberInPlace";

describe("swapNumberInPlace", () => {
  it("noops when idx1 does not exist", () => {
    const arrayToMutate = [1, 2, 3, 4, 2];

    swapNumberInPlace(6, 3, arrayToMutate);

    expect(arrayToMutate).toEqual([1, 2, 3, 4, 2]);
  });

  it("noops when idx2 does not exist", () => {
    const arrayToMutate = [1, 2, 3, 4, 2];

    swapNumberInPlace(1, -3, arrayToMutate);

    expect(arrayToMutate).toEqual([1, 2, 3, 4, 2]);
  });

  it("noops when idx1 and idx2 do not exist", () => {
    const arrayToMutate = [1, 2, 3, 4, 2];

    swapNumberInPlace(-4, 11, arrayToMutate);

    expect(arrayToMutate).toEqual([1, 2, 3, 4, 2]);
  });

  it("swaps the values when idx1's value is less than idx2's", () => {
    const arrayToMutate = [1, 2, 3, 4, 2];

    swapNumberInPlace(2, 4, arrayToMutate);

    expect(arrayToMutate).toEqual([1, 2, 2, 4, 3]);
  });

  it("swaps the values when idx2's value is less than idx1's", () => {
    const arrayToMutate = [1, 2, 3, 4, 2];

    swapNumberInPlace(4, 2, arrayToMutate);

    expect(arrayToMutate).toEqual([1, 2, 2, 4, 3]);
  });

  it("swaps the values when both idx's have the same value", () => {
    const arrayToMutate = [1, 2, 3, 4, 2];

    swapNumberInPlace(1, 4, arrayToMutate);

    expect(arrayToMutate).toEqual([1, 2, 3, 4, 2]);
  });
});
