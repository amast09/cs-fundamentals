// 7 ways to win a game

type XMove = "x";
type OMove = "o";
type NoMove = " ";
type CellState = NoMove | XMove | OMove;
type MoveIndex = 0 | 1 | 2;
type Move = [MoveIndex, MoveIndex];
type WinningMoveCombo = [Move, Move, Move];
type TicTacToeRow = [CellState, CellState, CellState];
export type TicTacToeGame = [TicTacToeRow, TicTacToeRow, TicTacToeRow];

const NO_MOVE: NoMove = " ";

const WINNING_GAMES: WinningMoveCombo[] = [
  // Diagonal Win
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  // Left to Right Wins
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  // Up and Down Wins
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
];

const gameHasMove = (cellState: CellState, game: TicTacToeGame) => (
  move: Move
): boolean => game[move[0]][move[1]] === cellState;

const gameHasWinningMoveCombo = (game: TicTacToeGame) => (
  moves: WinningMoveCombo
): boolean => {
  const firstMove: Move = moves[0];
  const firstMoveCellState: CellState = game[firstMove[0]][firstMove[1]];
  const gameHasMoveForCellState = gameHasMove(firstMoveCellState, game);

  return firstMoveCellState !== NO_MOVE && moves.every(gameHasMoveForCellState);
};

export const hasTicTacToeWinner = (game: TicTacToeGame): boolean =>
  WINNING_GAMES.some(gameHasWinningMoveCombo(game));
