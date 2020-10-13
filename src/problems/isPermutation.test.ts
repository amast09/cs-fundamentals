import isPermutation from "./isPermutation";

describe("isPermutation", () => {
  it.each`
    string1      | string2      | expectedToBePermutation
    ${""}        | ${""}        | ${true}
    ${"a"}       | ${"a"}       | ${true}
    ${"ab"}      | ${"ba"}      | ${true}
    ${"abc"}     | ${"cba"}     | ${true}
    ${"ab"}      | ${"bc"}      | ${false}
    ${"aaron"}   | ${"noraa"}   | ${true}
    ${"foobar"}  | ${"obraof"}  | ${true}
    ${"foobar"}  | ${"obr1aof"} | ${false}
    ${"f1oobar"} | ${"obr1aof"} | ${true}
  `(
    "should return `$expectedToBePermutation` for the strings `$string1` and `$string2`",
    ({ string1, string2, expectedToBePermutation }) => {
      expect(isPermutation(string1, string2)).toEqual(expectedToBePermutation);
    }
  );
});
