export interface Point {
  readonly x: number;
  readonly y: number;
}

export type Line = [Point, Point];

export type NoLine = "NoLine";

export const NO_LINE: NoLine = "NoLine";

interface LineWithPointsOnLine {
  readonly line: Line;
  readonly pointsOnLine: number;
}

const getSlopeForLine = (line: Line): number => {
  const [startPoint, endPoint] = line;
  const diffY = endPoint.y - startPoint.y;
  const diffX = endPoint.x - startPoint.x;

  return diffX === 0 ? diffX : diffY / diffX;
};

const isLineVertical = (line: Line) => line[0].y === line[1].y;

const isLineHorizontal = (line: Line) => line[0].x === line[1].x;

const isPointWithinLine = (line: Line, candidatePoint: Point): boolean => {
  const [startPoint, endPoint] = line;

  return (
    (candidatePoint.x >= startPoint.x &&
      candidatePoint.y >= startPoint.y &&
      candidatePoint.x <= endPoint.x &&
      candidatePoint.y <= endPoint.y) ||
    (candidatePoint.x <= startPoint.x &&
      candidatePoint.y <= startPoint.y &&
      candidatePoint.x >= endPoint.x &&
      candidatePoint.y >= endPoint.y)
  );
};

const isPointOnLine = (line: Line, candidatePoint: Point): boolean => {
  const [startPoint, endPoint] = line;
  const pointIsInLine = isPointWithinLine(line, candidatePoint);

  if (isLineHorizontal(line) && pointIsInLine) {
    return candidatePoint.x === endPoint.x;
  } else if (isLineVertical(line) && pointIsInLine) {
    return candidatePoint.y === endPoint.y;
  } else {
    const slopeOfLine = getSlopeForLine(line);
    const slopeForCandidatePoint = getSlopeForLine([
      startPoint,
      candidatePoint,
    ]);

    return slopeOfLine === slopeForCandidatePoint && pointIsInLine;
  }
};

const getBestLine = (points: Point[]): Line | NoLine => {
  if (points.length === 1) return [points[0], points[0]];

  const potentialLines = points.reduce((lines, point, idx) => {
    let currentIdx = idx + 1;
    while (currentIdx < points.length) {
      lines.push([point, points[currentIdx]]);
      currentIdx += 1;
    }
    return lines;
  }, new Array<Line>());

  const linesWithIntersections: LineWithPointsOnLine[] = potentialLines.map(
    (line) => ({
      line,
      pointsOnLine: points.filter((p) => isPointOnLine(line, p)).length,
    })
  );

  const lineWithMostIntersections = linesWithIntersections.reduce<
    NoLine | LineWithPointsOnLine
  >(
    (lineWithMostIntersections, lineWithIntersections) =>
      lineWithMostIntersections === NO_LINE ||
      lineWithIntersections.pointsOnLine >
        lineWithMostIntersections.pointsOnLine
        ? lineWithIntersections
        : lineWithMostIntersections,
    NO_LINE
  );

  return lineWithMostIntersections === NO_LINE
    ? lineWithMostIntersections
    : lineWithMostIntersections.line;
};

export default getBestLine;
