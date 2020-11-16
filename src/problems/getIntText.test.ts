import getIntText from "./getIntText";

describe("getIntText", () => {
  it.each`
    candidateNumber            | expectedText
    ${0}                       | ${"zero"}
    ${1}                       | ${"one"}
    ${7}                       | ${"seven"}
    ${20}                      | ${"twenty"}
    ${23}                      | ${"twenty three"}
    ${79}                      | ${"seventy nine"}
    ${400}                     | ${"four hundred"}
    ${810}                     | ${"eight hundred ten"}
    ${164}                     | ${"one hundred sixty four"}
    ${3000}                    | ${"three thousand"}
    ${6005}                    | ${"six thousand five"}
    ${2020}                    | ${"two thousand twenty"}
    ${4300}                    | ${"four thousand three hundred"}
    ${85000}                   | ${"eighty five thousand"}
    ${1234567}                 | ${"one million two hundred thirty four thousand five hundred sixty seven"}
    ${-2020}                   | ${"negative two thousand twenty"}
    ${Number.MAX_SAFE_INTEGER} | ${"nine quadrillion seven trillion one hundred ninety nine billion two hundred fifty four million seven hundred forty thousand nine hundred ninety one"}
  `(
    "should return `$expectedText` for the number `$candidateNumber`",
    ({ candidateNumber, expectedText }) => {
      expect(getIntText(candidateNumber)).toEqual(expectedText);
    }
  );
});
