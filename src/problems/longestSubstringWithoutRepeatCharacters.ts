function longestSubstringWithoutRepeatCharacters(
  candidateString: string
): number {
  let leftIdx = 0;
  let rightIdx = 0;
  let longestSubString = 0;
  const charactersInSubstring = new Set();
  

  while (rightIdx < candidateString.length) {
    const nextCharacter = candidateString.charAt(rightIdx);

    while (charactersInSubstring.has(nextCharacter)) {
      const nextLeftCharacter = candidateString.charAt(leftIdx);
      charactersInSubstring.delete(nextLeftCharacter);
      leftIdx += 1;
    }

    charactersInSubstring.add(nextCharacter);
    rightIdx += 1;
    longestSubString = Math.max(longestSubString, charactersInSubstring.size);
  }

  return longestSubString;
}

export default longestSubstringWithoutRepeatCharacters;
