const previousWordLookups: { [key: string]: number | undefined } = {};

const countWordFreq = (book: string[], wordToCount: string): number => {
  const previousLookupResult = previousWordLookups[wordToCount];

  if (previousLookupResult !== undefined) {
    return previousLookupResult;
  } else {
    const count = book.reduce(
      (totalCount: number, currentWordInBook: string) =>
        currentWordInBook.toLowerCase() === wordToCount.toLowerCase()
          ? totalCount + 1
          : totalCount,
      0
    );

    previousWordLookups[wordToCount] = count;

    return count;
  }
};

export default countWordFreq;
