import AdjacencyListGraph from "../data-structures/AdjacencyListGraph";
import AdjacencyMatrixGraph from "../data-structures/AdjacencyMatrixGraph";

export function adListGraphHasRoute<T>(
  startNodeValue: T,
  endNodeValue: T,
  graph: AdjacencyListGraph<T>
): boolean {
  const visitedNodes: Set<T> = new Set<T>();
  const nodesToVisit: T[] = [startNodeValue];
  let currentNode: T | undefined = undefined;

  while (nodesToVisit.length && currentNode !== endNodeValue) {
    currentNode = nodesToVisit.shift();

    if (currentNode !== undefined && !visitedNodes.has(currentNode)) {
      const maybeCurrentNodeNeighbors = graph.get(currentNode);
      const currentNodeNeighbors = maybeCurrentNodeNeighbors
        ? Array.from(maybeCurrentNodeNeighbors)
        : [];

      visitedNodes.add(currentNode);
      nodesToVisit.push(...currentNodeNeighbors);
    }
  }

  return currentNode === endNodeValue;
}

export function adMatrixGraphHasRoute(
  startNodeValue: number,
  endNodeValue: number,
  graph: AdjacencyMatrixGraph
): boolean {
  const visitedNodes: Set<number> = new Set<number>();
  const nodesToVisit: number[] = [startNodeValue];
  let currentNode: number | undefined = undefined;

  while (nodesToVisit.length && currentNode !== endNodeValue) {
    currentNode = nodesToVisit.shift();

    if (currentNode !== undefined && !visitedNodes.has(currentNode)) {
      const maybeCurrentNodeNeighbors = graph[currentNode];
      const currentNodeNeighbors = (maybeCurrentNodeNeighbors || []).reduce(
        (neighbors, isNeighbor, neighborNode) => {
          if (isNeighbor) {
            neighbors.push(neighborNode);
          }

          return neighbors;
        },
        [] as Array<number>
      );

      visitedNodes.add(currentNode);
      nodesToVisit.push(...currentNodeNeighbors);
    }
  }

  return currentNode === endNodeValue;
}
