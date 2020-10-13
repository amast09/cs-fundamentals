const isPermutation = (string1: string, string2: string): boolean => {
  if (string1.length !== string2.length) {
    return false;
  } else if (string1.length > 0) {
    const string1Characters = string1.split(""); // ["a", "b", "c"]
    const string2Characters = string2.split(""); // ["c", "b", "a"]
    let string2Idx = 0;

    while (
      string1Characters.length !== 0 &&
      string2Idx !== string2Characters.length
    ) {
      if (string1Characters[0] !== string2Characters[string2Idx]) {
        string2Idx += 1;
      } else {
        string1Characters.shift();
        string2Characters.splice(string2Idx, 1);
        string2Idx = 0;
      }
    }

    return string1Characters.length === 0;
  } else {
    return true;
  }
};

export default isPermutation;
