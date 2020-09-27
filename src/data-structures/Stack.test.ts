import Stack from "./Stack";

describe("Stack", () => {
  test("adds elements into the list in a LIFO fashion", () => {
    const linkedList = new Stack<number>();
    const element1 = 6;
    const element2 = 7;

    linkedList.push(element1);
    linkedList.push(element2);

    expect(linkedList.pop()).toBe(element2);
    expect(linkedList.pop()).toBe(element1);
    expect(linkedList.pop()).toBe(undefined);
  });
});
