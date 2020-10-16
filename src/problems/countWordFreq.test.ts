import countWordFreq from "./countWordFreq";

const bookText = "The quick brown fox jumped over the fence";
const book = bookText.split(" ");

describe("countWordFreq", () => {
  it("returns 0 for words that do not exist", () => {
    expect(countWordFreq(book, "foobar")).toEqual(0);
  });

  it("returns 1 for words that only exist once", () => {
    expect(countWordFreq(book, "fox")).toEqual(1);
  });

  it("searches for the word in a case-insensitive fashion", () => {
    expect(countWordFreq(book, "Fox")).toEqual(1);
  });

  it("counts words that occur more than once", () => {
    expect(countWordFreq(book, "the")).toEqual(2);
  });
});
