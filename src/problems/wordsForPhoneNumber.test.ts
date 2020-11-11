import wordsForPhoneNumber from "./wordsForPhoneNumber";

const validWords = ["tree", "used", "mast"];

const getWordsForPhoneNumber = wordsForPhoneNumber(validWords);

describe("wordsForPhoneNumber", () => {
  it("returns the right words for the phone number `8733`", () => {
    const phoneNumber = "8733";
    const expectedWords = [validWords[0], validWords[1]];

    expect(getWordsForPhoneNumber(phoneNumber)).toEqual(expectedWords);
  });

  it("returns the right words for the phone number `6278`", () => {
    const phoneNumber = "6278";
    const expectedWords = [validWords[2]];

    expect(getWordsForPhoneNumber(phoneNumber)).toEqual(expectedWords);
  });
});
