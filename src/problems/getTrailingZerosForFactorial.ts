const countFactorialsOfFive = (i: number): number => {
  let count = 0;

  while (i % 5 === 0) {
    count += 1;
    i /= 5;
  }

  return count;
};

const getTrailingZerosForFactorial = (factorial: number): number =>
  Array.from({ length: factorial })
    .map((_, idx) => idx + 1)
    .reduce(
      (numOfZeros, currentFact) =>
        numOfZeros + countFactorialsOfFive(currentFact),
      0
    );

export default getTrailingZerosForFactorial;
