const isPalindromePermutation = (potentialPalindrome: string): boolean => {
  const potentialPalindromeCharacters = potentialPalindrome.split("");
  const characterCountSet: Set<string> = new Set<string>();

  while (potentialPalindromeCharacters.length > 0) {
    const currentCharacter: string = potentialPalindromeCharacters.pop()!;

    if (characterCountSet.has(currentCharacter)) {
      characterCountSet.delete(currentCharacter);
    } else if (currentCharacter !== " ") {
      characterCountSet.add(currentCharacter);
    }
  }

  return Array.from(characterCountSet).length < 2;
};

export default isPalindromePermutation;
