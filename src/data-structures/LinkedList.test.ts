import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  describe("push + pop", () => {
    test("adds elements into the list and pops them in a LIFO fashion", () => {
      const linkedList = new LinkedList<number>();
      const element1 = 6;
      const element2 = 7;

      linkedList.push(element1);
      linkedList.push(element2);

      expect(linkedList.pop()).toBe(element2);
      expect(linkedList.pop()).toBe(element1);
    });
  });

  describe("head", () => {
    test("returns undefined when there are no elements in the linked list", () => {
      const linkedList = new LinkedList<number>();

      expect(linkedList.head()).toBe(undefined);
    });

    test("retrieves the first element in the linked list when there are elements in the list", () => {
      const linkedList = new LinkedList<number>();
      const element1 = 6;
      const element2 = 7;

      linkedList.push(element1);
      linkedList.push(element2);

      expect(linkedList.head()).toBe(element1);
    });
  });

  describe("tail", () => {
    test("returns undefined when there are no elements in the linked list", () => {
      const linkedList = new LinkedList<number>();

      expect(linkedList.tail()).toBe(undefined);
    });

    test("retrieves the last element in the linked list when there are elements in the list", () => {
      const linkedList = new LinkedList<number>();
      const element1 = 6;
      const element2 = 7;

      linkedList.push(element1);
      linkedList.push(element2);

      expect(linkedList.tail()).toBe(element2);
    });
  });
});
