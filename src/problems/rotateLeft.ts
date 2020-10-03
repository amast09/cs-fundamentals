// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

// Example array [1,2,3]
// [1,2,3] => 0

// Result => number of rotations
// [2,3,1] => 1
// [3,1,2] => 2
// [1,2,3] => 3

// [2,3,1] => 4
// [3,1,2] => 5 rotations = 5 shift = 2
// [1,2,3] => 6

const getIndexForRotation = (
  arrayForIndex: number[],
  currentIndex: number,
  shift: number
): number => {
  const proposedIndex = currentIndex - shift;
  return proposedIndex < 0
    ? proposedIndex + arrayForIndex.length
    : proposedIndex;
};

// 0(n) where n = length of array
const rotateLeft = (
  arrayOfNumbers: number[],
  numberOfRotations: number
): number[] => {
  const shift =
    numberOfRotations < arrayOfNumbers.length
      ? numberOfRotations
      : Math.floor(arrayOfNumbers.length / numberOfRotations) +
        (numberOfRotations % arrayOfNumbers.length);

  return arrayOfNumbers.reduce<number[]>(
    (rotatedArray, number, numbersIndex) => {
      const indexForRotation = getIndexForRotation(
        arrayOfNumbers,
        numbersIndex,
        shift
      );
      rotatedArray[indexForRotation] = number;

      return rotatedArray;
    },
    []
  );
};

export default rotateLeft;
