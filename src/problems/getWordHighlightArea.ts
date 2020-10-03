// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

type StringToNumberMap = { [n: string]: number | undefined };

const LETTER_TO_ALPHABET_INDEX: StringToNumberMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

// O(n) where n = word length, but since words are limited to 10 characters it isn't truly O(n)
const getWordHighlightArea = (
  alphabetHeights: number[],
  word: string
): number => {
  // get tallest character
  // unsorted list of alphabetHeights
  const charactersInWord = word.split("");
  const tallestCharacterInWord = charactersInWord.reduce<number>(
    (currentlyTallestCharacter, currentCharacter) => {
      const indexForLetter: number =
        LETTER_TO_ALPHABET_INDEX[currentCharacter] ?? 0;
      const currentLetterHeight: number = alphabetHeights[indexForLetter] ?? 0;
      return currentLetterHeight > currentlyTallestCharacter
        ? currentLetterHeight
        : currentlyTallestCharacter;
    },
    0
  );

  return word.length * tallestCharacterInWord;
};

export default getWordHighlightArea;
