function longestCommonSequence(s1: string, s2: string): number {
  const lcs: number[][] = [];

  for (let i1 = 0; i1 < s1.length; i1++) {
    lcs[i1] = [];

    for (let i2 = 0; i2 < s2.length; i2++) {
      const s1Character = s1[i1];
      const s2Character = s2[i2];

      if (s1Character === s2Character) {
        const previousCalculation =
          lcs[i1 - 1] && lcs[i1 - 1][i2 - 1] ? lcs[i1 - 1][i2 - 1] : 0;
        lcs[i1][i2] = previousCalculation + 1;
      } else {
        const previousResult1 = lcs[i1][i2 - 1] || 0;
        const previousResult2 =
          lcs[i1 - 1] && lcs[i1 - 1][i2] ? lcs[i1 - 1][i2] : 0;
        lcs[i1][i2] = Math.max(previousResult1, previousResult2);
      }
    }
  }

  return lcs[s1.length - 1][s2.length - 1];
}

export default longestCommonSequence;
