import BinarySearchTree from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  describe("remove", () => {
    it("removes the element from the binary tree when it has no children", () => {
      const binarySearchTree = new BinarySearchTree();
      const valueToRemove = 9;
      const valuesToInsert = [6, 4, 8, 3, 5, 7, 9];
      const expectedLevels = [[6], [4, 8], [3, 5, 7]];
      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      binarySearchTree.remove(valueToRemove);

      expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
      expect(
        binarySearchTree.breadthFirstSearchForValue(valueToRemove)
      ).toEqual(false);
    });

    // TODO
    it("removes the element from the binary tree when it has one child", () => {
      const binarySearchTree = new BinarySearchTree();
      const valueToRemove = 8;
      const valuesToInsert = [6, 4, 3, 3, 5, 7, 9];
      const expectedLevels = [[6], [4, 8], [3, 5, 7, 9]];
      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      binarySearchTree.remove(valueToRemove);

      expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
      expect(
        binarySearchTree.breadthFirstSearchForValue(valueToRemove)
      ).toEqual(false);
    });

    // TODO
    it("removes the element from the binary tree when it has two children", () => {
      const binarySearchTree = new BinarySearchTree();
      const valueToRemove = 8;
      const valuesToInsert = [6, 4, valueToRemove, 3, 5, 7, 9];
      const expectedLevels = [[6], [4, 8], [3, 5, 7, 9]];
      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      binarySearchTree.remove(valueToRemove);

      expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
      expect(
        binarySearchTree.breadthFirstSearchForValue(valueToRemove)
      ).toEqual(false);
    });
  });

  describe("toLevels", () => {
    test("correctly prints tree level by level", () => {
      const binarySearchTree = new BinarySearchTree();
      const valuesToInsert = [6, 4, 8, 3, 5, 7, 9];
      const expectedLevels = [[6], [4, 8], [3, 5, 7, 9]];

      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
    });

    test("correctly prints an empty tree", () => {
      const binarySearchTree = new BinarySearchTree();

      expect(binarySearchTree.toLevels()).toEqual([]);
    });
  });

  describe("depthFirstSearchForValue", () => {
    test("correctly finds inserted elements when using recursion", () => {
      const binarySearchTree = new BinarySearchTree();
      const valuesToInsert = [6, 4, 8, 3, 5, 7, 9];
      const notInsertedValue = 2020;

      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      expect(
        valuesToInsert.every((v) =>
          binarySearchTree.depthFirstSearchForValue(v, true)
        )
      ).toEqual(true);
      expect(
        binarySearchTree.depthFirstSearchForValue(notInsertedValue, true)
      ).toEqual(false);
    });

    test("correctly finds inserted elements when using iteration", () => {
      const binarySearchTree = new BinarySearchTree();
      const valuesToInsert = [6, 4, 8, 3, 5, 7, 9];
      const notInsertedValue = 2020;

      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      expect(
        valuesToInsert.every((v) =>
          binarySearchTree.depthFirstSearchForValue(v)
        )
      ).toEqual(true);
      expect(
        binarySearchTree.depthFirstSearchForValue(notInsertedValue)
      ).toEqual(false);
    });
  });

  describe("breadthFirstSearchForValue", () => {
    test("correctly finds inserted elements", () => {
      const binarySearchTree = new BinarySearchTree();
      const valuesToInsert = [6, 4, 8, 3, 5, 7, 9];
      const notInsertedValue = 2020;

      valuesToInsert.forEach((v) => binarySearchTree.insert(v));

      expect(
        valuesToInsert.every((v) =>
          binarySearchTree.breadthFirstSearchForValue(v)
        )
      ).toEqual(true);
      expect(
        binarySearchTree.breadthFirstSearchForValue(notInsertedValue)
      ).toEqual(false);
    });
  });
});
