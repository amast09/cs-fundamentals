import isPalindromePermutation from "./isPalindromePermutation";

describe("isPalindromePermutation", () => {
  it.each`
    potentialPalindromePermutation | expectedIsPalindrome
    ${""}                          | ${true}
    ${"a"}                         | ${true}
    ${"aa"}                        | ${true}
    ${"ab"}                        | ${false}
    ${"aba"}                       | ${true}
    ${"aab"}                       | ${true}
    ${"abc"}                       | ${false}
    ${"abba"}                      | ${true}
    ${"abab"}                      | ${true}
    ${"acab"}                      | ${false}
    ${"abcba"}                     | ${true}
    ${"acbba"}                     | ${true}
    ${"tact coa"}                  | ${true}
    ${"tac tcoa"}                  | ${true}
    ${"tacd tcoa"}                 | ${false}
  `(
    "should return `$expectedIsPalindrome` for the string `$potentialPalindromePermutation`",
    ({ potentialPalindromePermutation, expectedIsPalindrome }) => {
      expect(isPalindromePermutation(potentialPalindromePermutation)).toEqual(
        expectedIsPalindrome
      );
    }
  );
});
