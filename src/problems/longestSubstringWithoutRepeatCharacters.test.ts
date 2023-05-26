import longestSubstringWithoutRepeatCharacters from "./longestSubstringWithoutRepeatCharacters";

describe("longestSubstringWithoutRepeatCharacters", () => {
  it.each`
    candidateString | expectedLongestSubstringLength
    ${""}           | ${0}
    ${"abcabcbb"}   | ${3}
    ${"bbbbb"}      | ${1}
    ${"pwwkew"}     | ${3}
  `(
    "should return `$expectedLongestSubstringLength` for the string `$candidateString`",
    ({ candidateString, expectedLongestSubstringLength }) => {
      expect(longestSubstringWithoutRepeatCharacters(candidateString)).toEqual(
        expectedLongestSubstringLength
      );
    }
  );
});
