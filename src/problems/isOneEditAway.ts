const isOneEditAway = (string1: string, string2: string): boolean => {
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  } else {
    const string1Characters = string1.split("");
    const string2Characters = string2.split("");
    let string1Idx = 0;
    let string2Idx = 0;
    let numEdits = 0;

    while (
      numEdits < 2 &&
      string1Idx !== string1Characters.length &&
      string2Idx !== string2Characters.length
    ) {
      if (string1Characters[string1Idx] !== string2Characters[string2Idx]) {
        if (string1Characters.length > string2Characters.length) {
          string1Idx += 1;
        } else if (string1Characters.length < string2Characters.length) {
          string2Idx += 1;
        } else {
          string1Idx += 1;
          string2Idx += 1;
        }

        numEdits += 1;
      } else {
        string1Idx += 1;
        string2Idx += 1;
      }
    }
    return numEdits < 2;
  }
};

export default isOneEditAway;
