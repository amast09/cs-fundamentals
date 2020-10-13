import isOneEditAway from "./isOneEditAway";

describe("isOneEditAway", () => {
  it.each`
    string1    | string2     | expectedIsOneAway
    ${""}      | ${""}       | ${true}
    ${"a"}     | ${"a"}      | ${true}
    ${"ab"}    | ${"ba"}     | ${false}
    ${"pale"}  | ${"ple"}    | ${true}
    ${"pales"} | ${"pale"}   | ${true}
    ${"pale"}  | ${"bale"}   | ${true}
    ${"pale"}  | ${"bake"}   | ${false}
    ${"pale"}  | ${"paked"}  | ${false}
    ${"pale"}  | ${"paleds"} | ${false}
  `(
    "should return `$expectedIsOneAway` for the strings `$string1` and `$string2`",
    ({ string1, string2, expectedIsOneAway }) => {
      expect(isOneEditAway(string1, string2)).toEqual(expectedIsOneAway);
    }
  );
});
