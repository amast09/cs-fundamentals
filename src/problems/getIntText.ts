type NumberMap = Readonly<{ [key: number]: string }>;

const ONES_LOOKUP: NumberMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const TENS_LOOKUP: NumberMap = {
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const THOUSANDTHS_PLACE_NOUNS: NumberMap = {
  3: "thousand",
  6: "million",
  9: "billion",
  12: "trillion",
  15: "quadrillion",
};

const getIntText = (int: number): string => {
  let currentNumber = Math.abs(int);
  const decimalPlacesInNumber = Math.floor(Math.log10(currentNumber));
  let decimalPlaces = decimalPlacesInNumber - (decimalPlacesInNumber % 3);
  let currentHundrethChunk = Math.floor(
    currentNumber / Math.pow(10, decimalPlaces)
  );
  const intText = int < 0 ? ["negative"] : int === 0 ? ["zero"] : [];

  while (decimalPlaces >= 0) {
    const significantNumberNoun = THOUSANDTHS_PLACE_NOUNS[decimalPlaces] ?? "";
    const hundreds = ONES_LOOKUP[Math.floor(currentHundrethChunk / 100)];
    const tens = TENS_LOOKUP[Math.floor((currentHundrethChunk % 100) / 10)];
    const ones = ONES_LOOKUP[Math.floor(currentHundrethChunk % 10)];

    const hundredsText = hundreds ? hundreds + " hundred" : "";
    const chunkText = [hundredsText, tens, ones, significantNumberNoun]
      .filter((t) => t !== undefined && t !== "")
      .join(" ");

    intText.push(chunkText);

    currentNumber =
      currentNumber - currentHundrethChunk * Math.pow(10, decimalPlaces);
    decimalPlaces -= 3;
    currentHundrethChunk = Math.floor(
      currentNumber / Math.pow(10, decimalPlaces)
    );
  }

  return intText.join(" ").trim();
};

export default getIntText;
