/*
1 Board
2 => 2
3 => 3

2 Boards
2,2 => 4
2,3 => 5
3,3 => 6

3 Boards
2,2,2 => 6 (3*2)+(0*3)
2,2,3 => 7 (2*2)+(1*3)
2,3,3 => 8 (1*2)+(2*3)
3,3,3 => 9 (0*2)+(3*3)

4 Boards
2,2,2,2 => 8
2,2,2,3 => 9
2,2,3,3 => 10
2,3,3,3 => 11
3,3,3,3 => 12

5 Boards
2,2,2,2,2 => 10
2,2,2,2,3 => 11
2,2,2,3,3 => 12
2,2,3,3,3 => 13
2,3,3,3,3 => 14
3,3,3,3,3 => 15

1 Board
1 => 1
9 => 9

2 Boards
1,1 => 2
1,9 => 10
9,9 => 18

3 Boards
1,1,1 => 3 (3*1)+(0*9)
1,1,9 => 11 (2*1)+(1*9)
1,9,9 => 19
9,9,9 => 27

4 Boards
1,1,1,1 => 4
1,1,1,9 => 12
1,1,9,9 => 20
1,9,9,9 => 28
9,9,9,9 => 36

5 Boards
1,1,1,1,1 => 5
1,1,1,1,9 => 13
1,1,1,9,9 => 21
1,1,9,9,9 => 29
1,9,9,9,9 => 37
9,9,9,9,9 => 45
*/

const getDivingBoardLengths = (
  params: Readonly<{
    shorterBoardLength: number;
    longerBoardLength: number;
    numberOfBoards: number;
  }>
): number[] => {
  const { shorterBoardLength, longerBoardLength, numberOfBoards } = params;
  const divingBoardLengths = [];

  if (numberOfBoards > 0 && shorterBoardLength !== longerBoardLength) {
    let idx = numberOfBoards;

    while (idx >= 0) {
      divingBoardLengths.push(
        idx * shorterBoardLength + (numberOfBoards - idx) * longerBoardLength
      );
      idx -= 1;
    }
  } else if (numberOfBoards > 0 && shorterBoardLength === longerBoardLength) {
    divingBoardLengths.push(numberOfBoards * shorterBoardLength);
  }

  return divingBoardLengths;
};

export default getDivingBoardLengths;
