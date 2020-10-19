type NoSmallestDifference = "NoSmallestDifference";
export const NO_SMALLEST_DIFFERENCE: NoSmallestDifference =
  "NoSmallestDifference";

type DifferenceResult = number | NoSmallestDifference;

const compareNumbers = (number1: number, number2: number): number =>
  number1 - number2;

const getSmallestDifference = (
  array1: number[],
  array2: number[]
): DifferenceResult => {
  if (array1.length === 0 || array2.length === 0) {
    return NO_SMALLEST_DIFFERENCE;
  } else {
    array1.sort(compareNumbers);
    array2.sort(compareNumbers);

    let array1Idx = 0;
    let array2Idx = 0;
    let currentSmallestDiff = Math.abs(array1[array1Idx] - array2[array2Idx]);
    let foundADiffOfZero = false;

    while (
      array1Idx < array1.length &&
      array2Idx < array2.length &&
      !foundADiffOfZero
    ) {
      if (array1[array1Idx] < array2[array2Idx]) {
        array1Idx += 1;
      } else if (array1[array1Idx] > array2[array2Idx]) {
        array2Idx += 1;
      } else {
        foundADiffOfZero = true;
      }

      const nextDiff = Math.abs(array1[array1Idx] - array2[array2Idx]);

      if (nextDiff < currentSmallestDiff) {
        currentSmallestDiff = nextDiff;
      }
    }

    return currentSmallestDiff;
  }
};

export default getSmallestDifference;
