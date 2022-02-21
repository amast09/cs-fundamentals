import longestCommonSequence from "./longestCommonSequence";

describe("longestCommonSequence", () => {
  it.each`
    s1                                                      | s2                                                      | lcs
    ${"AGGTAB"}                                             | ${"GXTXAYB"}                                            | ${4}
    ${"HARRY"}                                              | ${"SALLY"}                                              | ${2}
    ${"AA"}                                                 | ${"BB"}                                                 | ${0}
    ${"SHINCHAN"}                                           | ${"NOHARAAA"}                                           | ${3}
    ${"ABCDEF"}                                             | ${"FBDAMN"}                                             | ${2}
    ${"WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS"} | ${"FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"} | ${15}
  `(
    "returns `$lcs` as the longest common sequence for `$s1` and `$s2`",
    ({ s1, s2, lcs }) => {
      expect(longestCommonSequence(s1, s2)).toEqual(lcs);
    }
  );
});
