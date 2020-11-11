const LETTER_TO_KEYPAD_NUMBER: Readonly<{ [key: string]: number }> = {
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9,
};

const wordsForPhoneNumber = (validWords: string[]) => {
  const numberToWordsDictionary = validWords.reduce<{
    [key: string]: string[];
  }>((dict, validWord) => {
    const numberStringForWord: string = validWord
      .split("")
      .map((character) => LETTER_TO_KEYPAD_NUMBER[character])
      .join("");

    dict[numberStringForWord] =
      dict[numberStringForWord] === undefined
        ? [validWord]
        : dict[numberStringForWord].concat(validWord);

    return dict;
  }, {});

  return (phoneNumber: string): string[] => {
    return numberToWordsDictionary[phoneNumber] ?? [];
  };
};

export default wordsForPhoneNumber;
