export type ElevationMap = number[][];

interface Cell {
  readonly x: number;
  readonly y: number;
}

const isValidCell = (map: ElevationMap) => (cell: Cell): boolean =>
  map[cell.y] !== undefined && map[cell.y][cell.x] !== undefined;

const isPondCell = (map: ElevationMap) => (cell: Cell): boolean =>
  isValidCell(map)(cell) && map[cell.y][cell.x] === 0;

const getCellId = (cell: Cell): string => `${cell.x},${cell.y}`;

const getNextCell = (map: ElevationMap) => (
  currentCell: Cell
): Cell | undefined => {
  const nextX =
    currentCell.x + 1 > map[currentCell.y].length ? 0 : currentCell.x + 1;
  const nextY = nextX === 0 ? currentCell.y + 1 : currentCell.y;

  return nextY < map.length ? { x: nextX, y: nextY } : undefined;
};

const getCellNeighbors = (cell: Cell): Cell[] => [
  { x: cell.x + 1, y: cell.y + 1 },
  { x: cell.x + 1, y: cell.y - 1 },
  { x: cell.x, y: cell.y + 1 },
  { x: cell.x, y: cell.y - 1 },
  { x: cell.x - 1, y: cell.y + 1 },
  { x: cell.x - 1, y: cell.y - 1 },
  { x: cell.x - 1, y: cell.y },
  { x: cell.x + 1, y: cell.y },
];

const getPondSizes = (map: ElevationMap): number[] => {
  const isValidCellInMap = isValidCell(map);
  const isPondCellInMap = isPondCell(map);
  const getNextCellInMap = getNextCell(map);
  const pondSizes = [];
  const visitedCells: Set<string> = new Set<string>();
  let rootCellToDFS: Cell | undefined = { x: 0, y: 0 };

  while (rootCellToDFS !== undefined) {
    let currentPondSize = 0;
    let cellsToVisit: Cell[] = [rootCellToDFS];
    let currentCell = cellsToVisit.pop();

    while (currentCell !== undefined) {
      const currentCellId = getCellId(currentCell);

      if (!visitedCells.has(currentCellId)) {
        if (isPondCellInMap(currentCell)) {
          currentPondSize += 1;

          const cellNeighbors = getCellNeighbors(currentCell);

          cellNeighbors.forEach((neighborCell) => {
            if (
              !visitedCells.has(getCellId(neighborCell)) &&
              isPondCellInMap(neighborCell)
            ) {
              cellsToVisit.push(neighborCell);
            } else if (
              !visitedCells.has(getCellId(neighborCell)) &&
              !isPondCellInMap(neighborCell) &&
              isValidCellInMap(neighborCell)
            ) {
              visitedCells.add(getCellId(neighborCell));
            }
          });
        }

        visitedCells.add(currentCellId);
      }

      currentCell = cellsToVisit.pop();
    }

    if (currentPondSize > 0) {
      pondSizes.push(currentPondSize);
    }

    currentPondSize = 0;
    rootCellToDFS = getNextCellInMap(rootCellToDFS);
  }

  return pondSizes;
};

export default getPondSizes;
