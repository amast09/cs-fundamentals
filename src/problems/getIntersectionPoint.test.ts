import getIntersectionPoint, {
  Line,
  NO_INTERSECTION,
  Point,
} from "./getIntersectionPoint";

describe("getIntersectionPoint", () => {
  /*
                  Intersection = 0,2  
                        2,1
                        |
                  0,0---|---5,0
                        |
                       2,-1
              */
  it("returns the point of intersection if the lines intersect", () => {
    const line1: Line = {
      point1: { x: 0, y: 0 },
      point2: { x: 5, y: 0 },
    };
    const line2: Line = {
      point1: { x: 2, y: 1 },
      point2: { x: 2, y: -1 },
    };
    const expectedIntersectionPoint: Point = { x: 2, y: 0 };

    expect(getIntersectionPoint(line1, line2)).toEqual(
      expectedIntersectionPoint
    );
  });

  it("returns the point of intersection if the lines intersect but points are flipped", () => {
    const line1: Line = {
      point1: { x: 5, y: 0 },
      point2: { x: 0, y: 0 },
    };
    const line2: Line = {
      point1: { x: 2, y: -1 },
      point2: { x: 2, y: 1 },
    };
    const expectedIntersectionPoint: Point = { x: 2, y: 0 };

    expect(getIntersectionPoint(line1, line2)).toEqual(
      expectedIntersectionPoint
    );
  });

  /*
                    Intersection = NoIntersection  
                    0,0---|---5,0
                    0,-1---|---5,-1         
                */
  it("returns 'NoIntersection' if the lines are both horizontal", () => {
    const line1: Line = {
      point1: { x: 0, y: 0 },
      point2: { x: 5, y: 0 },
    };
    const line2: Line = {
      point1: { x: 0, y: -1 },
      point2: { x: 5, y: -1 },
    };

    expect(getIntersectionPoint(line1, line2)).toEqual(NO_INTERSECTION);
  });

  /*
                  Intersection = 0,2  
                     2,1 3,1
                      |   |
                      |   |
                      |   |
                    2,-1 3,-1
              */
  it("returns 'NoIntersection' if the lines are both vertical", () => {
    const line1: Line = {
      point1: { x: 2, y: 1 },
      point2: { x: 2, y: -1 },
    };
    const line2: Line = {
      point1: { x: 3, y: 1 },
      point2: { x: 3, y: -1 },
    };

    expect(getIntersectionPoint(line1, line2)).toEqual(NO_INTERSECTION);
  });

  /*
                 Intersection = NoIntersection
                       2,1
                       |
                       |
                       |
                      2,-1
                      
                 0,-3 ---|--- 5,-3
             */
  it("returns 'NoIntersection' if the lines don't cross on the x-axis", () => {
    const line1: Line = {
      point1: { x: 2, y: 1 },
      point2: { x: 2, y: -1 },
    };
    const line2: Line = {
      point1: { x: 0, y: -3 },
      point2: { x: 5, y: -3 },
    };

    expect(getIntersectionPoint(line1, line2)).toEqual(NO_INTERSECTION);
  });

  /*
                 Intersection = NoIntersection  
                                   2,1
                                   |
              -3,0 ---|--- 0,0     |
                                   |
                                  2,-1
                      
                 
             */
  it("returns 'NoIntersection' if the lines don't cross on the y-axis", () => {
    const line1: Line = {
      point1: { x: -3, y: 0 },
      point2: { x: 0, y: 0 },
    };
    const line2: Line = {
      point1: { x: 2, y: 1 },
      point2: { x: 2, y: -1 },
    };

    expect(getIntersectionPoint(line1, line2)).toEqual(NO_INTERSECTION);
  });

  it("returns 'NoIntersection' if the lines are just points", () => {
    const line1: Line = {
      point1: { x: 0, y: 0 },
      point2: { x: 0, y: 0 },
    };
    const line2: Line = {
      point1: { x: 1, y: 1 },
      point2: { x: 1, y: 1 },
    };

    expect(getIntersectionPoint(line1, line2)).toEqual(NO_INTERSECTION);
  });

  it("returns the intersection if the lines are the same point", () => {
    const point: Point = { x: 0, y: 1 };
    const line1: Line = {
      point1: point,
      point2: point,
    };
    const line2: Line = {
      point1: point,
      point2: point,
    };

    expect(getIntersectionPoint(line1, line2)).toEqual(point);
  });
});
