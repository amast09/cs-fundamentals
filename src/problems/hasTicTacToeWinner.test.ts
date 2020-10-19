import { hasTicTacToeWinner, TicTacToeGame } from "./hasTicTacToeWinner";

describe("hasTicTacToeWinner", () => {
  const game1: TicTacToeGame = [
    ["x", "o", "o"],
    [" ", "x", " "],
    [" ", "o", "x"],
  ];
  const game2: TicTacToeGame = [
    ["x", "x", "x"],
    [" ", "o", " "],
    [" ", "o", "o"],
  ];
  const game3: TicTacToeGame = [
    [" ", "o", " "],
    ["x", "x", "x"],
    [" ", "o", "o"],
  ];
  const game4: TicTacToeGame = [
    [" ", "o", " "],
    [" ", "o", "o"],
    ["x", "x", "x"],
  ];
  const game5: TicTacToeGame = [
    ["x", " ", " "],
    ["x", "o", " "],
    ["x", "o", "o"],
  ];
  const game6: TicTacToeGame = [
    ["x", "o", "x"],
    [" ", "o", " "],
    [" ", "o", "x"],
  ];
  const game7: TicTacToeGame = [
    ["x", "o", "o"],
    [" ", "x", "o"],
    ["x", "x", "o"],
  ];
  const winningGames = [
    [game1],
    [game2],
    [game3],
    [game4],
    [game5],
    [game6],
    [game7],
  ];

  test.each(winningGames)("should return true for game %j", (winningGame) => {
    expect(hasTicTacToeWinner(winningGame)).toBe(true);
  });

  const game8: TicTacToeGame = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const game9: TicTacToeGame = [
    ["x", "o", "o"],
    ["o", "x", "x"],
    ["x", "o", "o"],
  ];
  const game10: TicTacToeGame = [
    ["o", "x", "o"],
    ["x", "o", "o"],
    ["x", "o", "x"],
  ];
  const noWinnerGames = [[game8], [game9], [game10]];

  test.each(noWinnerGames)(
    "should return false for game %j",
    (noWinnerGame) => {
      expect(hasTicTacToeWinner(noWinnerGame)).toBe(false);
    }
  );
});
