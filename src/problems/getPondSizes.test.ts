import getPondSizes from "./getPondSizes";

describe("getPondSizes", () => {
  it("should return the sizes of all the ponds in the map", () => {
    const map = [
      [0, 2, 1, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 1, 0, 1],
    ];
    const expectedPondSizes = [2, 4, 1];

    const actualPondSizes = getPondSizes(map);

    expect(actualPondSizes).toEqual(expect.arrayContaining(expectedPondSizes));
    expect(actualPondSizes).toHaveLength(expectedPondSizes.length);
  });

  it("should return the sizes of all the ponds in the map when the first cell is not a pond", () => {
    const map = [
      [1, 2, 1, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 1, 0, 1],
    ];
    const expectedPondSizes = [1, 4, 1];

    const actualPondSizes = getPondSizes(map);

    expect(actualPondSizes).toEqual(expect.arrayContaining(expectedPondSizes));
    expect(actualPondSizes).toHaveLength(expectedPondSizes.length);
  });
});
