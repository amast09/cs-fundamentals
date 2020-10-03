import getWordHighlightArea from "./getWordHighlightArea";

describe("getWordHighlightArea", () => {
  const alphabetHeights = [
    1, // a
    3, // b
    1, // c
    3, // d
    1, // e
    4, // f
    1, // g
    3, // h
    2, // i
    5, // j
    5, // k
    5, // l
    5, // m
    5, // n
    5, // o
    5, // p
    5, // q
    5, // r
    5, // s
    5, // t
    5, // u
    5, // v
    5, // w
    5, // x
    5, // y
    7, // z
  ];
  // 4
  it.each`
    word            | expectedHighlightArea
    ${""}           | ${0}
    ${"z"}          | ${7}
    ${"abc"}        | ${9}
    ${"aaron"}      | ${25}
    ${"foobar"}     | ${30}
    ${"strawberry"} | ${50}
  `(
    "should return a highlight area of `$expectedHighlightArea` for the word `$word`",
    ({ word, expectedHighlightArea }) => {
      expect(getWordHighlightArea(alphabetHeights, word)).toEqual(
        expectedHighlightArea
      );
    }
  );
});
