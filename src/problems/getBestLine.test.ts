import getBestLine, { Line, NO_LINE, Point } from "./getBestLine";

const pointsAreEqual = (point1: Point, point2: Point): boolean =>
  point1.x === point2.x && point1.y === point2.y;

const linesAreEqual = (line1: Line, line2: Line) =>
  pointsAreEqual(line1[0], line2[0]) && pointsAreEqual(line1[1], line2[1]);

describe("getBestLine", () => {
  it("returns `NO_LINE` when no points are provided", () => {
    expect(getBestLine([])).toEqual(NO_LINE);
  });

  it("returns the correct best line when there is only a single point", () => {
    const singlePoint: Point = { x: 1, y: 2 };
    const expectedLine: Line = [singlePoint, singlePoint];

    expect(getBestLine([singlePoint])).toEqual(expectedLine);
  });

  it("returns the correct best line when there is two points", () => {
    const point1: Point = { x: 0, y: 0 };
    const point2: Point = { x: 1, y: 2 };
    const validLines: Line[] = [
      [point1, point2],
      [point2, point1],
    ];

    const actualLine = getBestLine([point1, point2]);

    expect(
      validLines.some(
        (l) => actualLine !== NO_LINE && linesAreEqual(l, actualLine)
      )
    ).toEqual(true);
  });

  it("returns the correct best line when there is three points", () => {
    const point1: Point = { x: 0, y: 0 };
    const point2: Point = { x: 1, y: 2 };
    const point3: Point = { x: 3, y: 4 };
    const validLines: Line[] = [
      [point1, point2],
      [point2, point3],
      [point1, point3],
    ];

    const actualLine = getBestLine([point1, point2, point3]);

    expect(
      validLines.some(
        (l) => actualLine !== NO_LINE && linesAreEqual(l, actualLine)
      )
    ).toEqual(true);
  });

  it("returns the correct best line when the line is horizontal", () => {
    const point1: Point = { x: 0, y: 0 };
    const point2: Point = { x: 0, y: 1 };
    const point3: Point = { x: 0, y: 2 };
    const point4: Point = { x: 1, y: 1 };
    const validLines: Line[] = [
      [point1, point3],
      [point3, point1],
    ];

    const actualLine = getBestLine([point1, point2, point3, point4]);

    expect(
      validLines.some(
        (l) => actualLine !== NO_LINE && linesAreEqual(l, actualLine)
      )
    ).toEqual(true);
  });

  it("returns the correct best line when the line is vertical", () => {
    const point1: Point = { x: 0, y: 0 };
    const point2: Point = { x: 1, y: 0 };
    const point3: Point = { x: 2, y: 0 };
    const point4: Point = { x: 1, y: 1 };
    const validLines: Line[] = [
      [point1, point3],
      [point3, point1],
    ];

    const actualLine = getBestLine([point1, point2, point3, point4]);

    expect(
      validLines.some(
        (l) => actualLine !== NO_LINE && linesAreEqual(l, actualLine)
      )
    ).toEqual(true);
  });

  it("returns the correct best line when there is only one best line of many points", () => {
    const point1: Point = { x: 0, y: 0 };
    const point2: Point = { x: 8, y: 8 };
    const validLines: Line[] = [
      [point1, point2],
      [point2, point1],
    ];

    const actualLine = getBestLine([
      point1,
      { x: 539, y: 28 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 283, y: 923 },
      point2,
    ]);

    expect(
      validLines.some(
        (l) => actualLine !== NO_LINE && linesAreEqual(l, actualLine)
      )
    ).toEqual(true);
  });
});
