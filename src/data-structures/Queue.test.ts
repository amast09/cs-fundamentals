import Queue from "./Queue";

describe("Queue", () => {
  test("adds elements into the list in a FIFO fashion", () => {
    const linkedList = new Queue<number>();
    const element1 = 6;
    const element2 = 7;

    linkedList.enqueue(element1);
    linkedList.enqueue(element2);

    expect(linkedList.dequeue()).toBe(element1);
    expect(linkedList.dequeue()).toBe(element2);
    expect(linkedList.dequeue()).toBe(undefined);
  });
});
