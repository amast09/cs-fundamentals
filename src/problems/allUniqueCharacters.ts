const allUniqueCharacters = (candidateString: string): boolean => {
  const characters: string[] = candidateString.split("");
  const uniqueCharacters: { [key: string]: undefined | boolean } = {};

  return !characters.some((character: string) => {
    if (uniqueCharacters[character] !== undefined) {
      return true;
    } else {
      uniqueCharacters[character] = true;
      return false;
    }
  });
};

export default allUniqueCharacters;
