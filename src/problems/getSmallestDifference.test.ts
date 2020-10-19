import getSmallestDifference, {
  NO_SMALLEST_DIFFERENCE,
} from "./getSmallestDifference";

describe("getSmallestDifference", () => {
  it("should return -1 when the arrays are empty", () => {
    expect(getSmallestDifference([], [])).toEqual(NO_SMALLEST_DIFFERENCE);
  });

  it("should return -1 when array 1 is empty", () => {
    expect(getSmallestDifference([], [1])).toEqual(NO_SMALLEST_DIFFERENCE);
  });

  it("should return -1 when array 2 is empty", () => {
    expect(getSmallestDifference([1], [])).toEqual(NO_SMALLEST_DIFFERENCE);
  });

  it("should return 0 when there are matching values in the arrays", () => {
    expect(getSmallestDifference([1, 90, 2093, 6], [2, 2093, 7, 98])).toEqual(
      0
    );
  });

  it("should return the smallest difference in the array when array 1 has the smaller value", () => {
    expect(
      getSmallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])
    ).toEqual(3);
  });

  it("should return the smallest difference in the array when array 2 has the smaller value", () => {
    expect(
      getSmallestDifference([23, 127, 235, 19, 8], [1, 3, 15, 11, 2])
    ).toEqual(3);
  });
});
