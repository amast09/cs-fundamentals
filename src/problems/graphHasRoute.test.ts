import AdjacencyListGraph from "../data-structures/AdjacencyListGraph";
import { adListGraphHasRoute, adMatrixGraphHasRoute } from "./graphHasRoute";
import AdjacencyMatrixGraph from "../data-structures/AdjacencyMatrixGraph";

/*----------------

  Graph for test's:

  0 -> 1
  ^    |
  |    v
  ^----2<--3

----------------*/

describe("graphHasRoute", () => {
  // [pathStart, pathEnd, hasRoute]
  const testData: [number, number, boolean][] = [
    [0, 0, true],
    [0, 1, true],
    [0, 2, true],
    [0, 3, false],
    [0, 97, false],
    [1, 0, true],
    [1, 1, true],
    [1, 2, true],
    [1, 3, false],
    [1, -3, false],
    [2, 0, true],
    [2, 1, true],
    [2, 2, true],
    [2, 3, false],
    [2, 1991, false],
    [3, 0, true],
    [3, 1, true],
    [3, 2, true],
    [3, 3, true],
    [3, 97, false],
  ];

  describe("adListGraphHasRoute", () => {
    const adjacencyListGraph: AdjacencyListGraph<number> = new Map();

    adjacencyListGraph.set(0, new Set([1]));
    adjacencyListGraph.set(1, new Set([2]));
    adjacencyListGraph.set(2, new Set([0]));
    adjacencyListGraph.set(3, new Set([2]));

    it.each(testData)(
      "for path `%p` -> `%i` should return `%j`",
      (start, end, containsPath) => {
        expect(adListGraphHasRoute(start, end, adjacencyListGraph)).toEqual(
          containsPath
        );
      }
    );
  });

  describe("adMatrixGraphHasRoute", () => {
    const adjacencyMatrixGraph: AdjacencyMatrixGraph = [
      [false, true, false, false],
      [false, false, true, false],
      [true, false, false, false],
      [false, false, true, false],
    ];

    it.each(testData)(
      "for path `%p` -> `%i` should return `%j`",
      (start, end, containsPath) => {
        expect(adMatrixGraphHasRoute(start, end, adjacencyMatrixGraph)).toEqual(
          containsPath
        );
      }
    );
  });
});
