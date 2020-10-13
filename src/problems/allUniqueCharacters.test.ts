import allUniqueCharacters from "./allUniqueCharacters";

describe("allUniqueCharacters", () => {
  it.each`
    candidateString        | expectedUniqueness
    ${""}                  | ${true}
    ${"a"}                 | ${true}
    ${"abc"}               | ${true}
    ${"aba"}               | ${false}
    ${"aba"}               | ${false}
    ${"abcdefghijklmnopa"} | ${false}
    ${"aA"}                | ${true}
    ${"aAbhey672"}         | ${true}
    ${"aA7hey672"}         | ${false}
  `(
    "should return `$expectedUniqueness` for the string `$candidateString`",
    ({ candidateString, expectedUniqueness }) => {
      expect(allUniqueCharacters(candidateString)).toEqual(expectedUniqueness);
    }
  );
});
