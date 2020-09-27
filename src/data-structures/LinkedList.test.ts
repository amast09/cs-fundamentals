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

  describe("get", () => {
    test("returns undefined when there are no elements in the linked list", () => {
      const linkedList = new LinkedList<number>();

      expect(linkedList.get(1)).toBe(undefined);
    });

    test("returns undefined when the index is less than 0", () => {
      const linkedList = new LinkedList<number>();

      expect(linkedList.get(-1)).toBe(undefined);
    });

    test("returns undefined when the index is greater than the list size", () => {
      const linkedList = new LinkedList<number>();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);

      expect(linkedList.get(500)).toBe(undefined);
    });

    test("returns the element at the specific index when it exists at the index", () => {
      const expectedElement = 2;
      const linkedList = new LinkedList<number>();
      linkedList.push(1);
      linkedList.push(expectedElement);
      linkedList.push(3);

      expect(linkedList.get(1)).toBe(expectedElement);
    });
  });
});
