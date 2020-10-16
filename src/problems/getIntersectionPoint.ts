export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface Line {
  readonly point1: Point;
  readonly point2: Point;
}

type NoIntersection = "NoIntersection";

export const NO_INTERSECTION: NoIntersection = "NoIntersection";

type IntersectionResult = Point | NoIntersection;

interface LinesOfInterSection {
  readonly verticalLine: Line;
  readonly horizontalLine: Line;
}

type LinesOfIntersectionResult = LinesOfInterSection | NoIntersection;

enum LineDirection {
  Vertical = "Vertical",
  Horizontal = "Horizontal",
}

const getLineDirection = (line: Line): LineDirection =>
  line.point1.x === line.point2.x
    ? LineDirection.Vertical
    : LineDirection.Horizontal;

const getLinesOfIntersection = (
  line1: Line,
  line2: Line
): LinesOfIntersectionResult => {
  const line1Direction = getLineDirection(line1);
  const line2Direction = getLineDirection(line2);

  if (line1Direction === line2Direction) {
    return NO_INTERSECTION;
  } else if (line1Direction === LineDirection.Vertical) {
    return {
      verticalLine: line1,
      horizontalLine: line2,
    };
  } else {
    return {
      verticalLine: line2,
      horizontalLine: line1,
    };
  }
};

const getIntersection = (
  linesOfInterSection: LinesOfInterSection
): IntersectionResult => {
  const { horizontalLine, verticalLine } = linesOfInterSection;

  const xAxisIntersects =
    (horizontalLine.point1.x >= verticalLine.point1.x &&
      horizontalLine.point2.x <= verticalLine.point2.x) ||
    (horizontalLine.point2.x >= verticalLine.point1.x &&
      horizontalLine.point1.x <= verticalLine.point2.x);
  const yAxisIntersects =
    (verticalLine.point1.y >= horizontalLine.point1.y &&
      verticalLine.point2.y <= horizontalLine.point1.y) ||
    (verticalLine.point2.y >= horizontalLine.point1.y &&
      verticalLine.point1.y <= horizontalLine.point1.y);

  if (xAxisIntersects && yAxisIntersects) {
    return {
      x: verticalLine.point1.x,
      y: horizontalLine.point1.y,
    };
  } else {
    return NO_INTERSECTION;
  }
};

const pointsAreSame = (point1: Point) => (point2: Point): boolean =>
  point1.x === point2.x && point1.y === point2.y;

const linesAreSamePoint = (line1: Line, line2: Line): boolean => {
  const areSameAsLine1Point1 = pointsAreSame(line1.point1);
  return [line1.point1, line1.point2, line2.point1, line2.point2].every(
    areSameAsLine1Point1
  );
};

/*
  Intersection = 2,0
          2,1
          |
    0,0---|---5,0
          |
         2,-1

* a line is a vertical line if x's don't change
* a line is a horizontal line if y's don't change
* 2 lines intersect if:
  -> the horizontal line's y is between the vertical line's y span
  -> the vertical line's x is between the horizontal line's x span

*/
const getIntersectionPoint = (line1: Line, line2: Line): IntersectionResult => {
  const linesOfIntersection = getLinesOfIntersection(line1, line2);

  if (linesOfIntersection !== NO_INTERSECTION) {
    return getIntersection(linesOfIntersection);
  } else if (linesAreSamePoint(line1, line2)) {
    return line1.point1;
  } else {
    return linesOfIntersection;
  }
};

export default getIntersectionPoint;
