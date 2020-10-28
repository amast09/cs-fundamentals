export const findPairsWithSumSlow = (
  sum: number,
  numbers: number[]
): Array<[number, number]> => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const pairs: Array<[number, number]> = [];
  let currentIdx = 0;
  let currentNumber = sortedNumbers.shift();

  while (
    currentNumber !== undefined &&
    currentNumber < sum &&
    currentIdx <= sortedNumbers.length
  ) {
    const nextNumber = sortedNumbers[currentIdx];

    if (currentNumber + nextNumber === sum) {
      const lastPair = pairs[pairs.length - 1];
      if (
        lastPair === undefined ||
        lastPair[0] !== currentNumber ||
        lastPair[1] !== nextNumber
      ) {
        pairs.push([currentNumber, nextNumber]);
      }

      currentIdx += 1;
    } else if (currentNumber + nextNumber < sum) {
      currentIdx += 1;
    } else {
      currentNumber = sortedNumbers.shift();
      currentIdx = 0;
    }
  }

  return pairs;
};

const findPairsWithSum = (
  sum: number,
  numbers: number[]
): Array<[number, number]> => {
  const pairs: Array<[number, number]> = [];
  const compliments: { [key: number]: number } = {};

  for (let idx = 0; idx < numbers.length; idx++) {
    const currentNumber = numbers[idx];
    const currentCompliment = sum - currentNumber;

    if (compliments[currentCompliment] === 1) {
      pairs.push([currentNumber, currentCompliment]);
    } else {
      compliments[currentNumber] = compliments[currentNumber]
        ? compliments[currentNumber] + 1
        : 1;
    }
  }

  return pairs;
};

export default findPairsWithSum;
