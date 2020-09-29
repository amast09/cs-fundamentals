import BinarySearchTree from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  describe("remove", () => {
    it("removes the root element when it is the only node", () => {
      const binarySearchTree = new BinarySearchTree();
      const valueToRemove = 3;
      binarySearchTree.insert(valueToRemove);

      binarySearchTree.remove(valueToRemove);

      expect(binarySearchTree.toLevels()).toEqual([]);
      expect(
        binarySearchTree.breadthFirstSearchForValue(valueToRemove)
      ).toEqual(false);
    });

    /* Tree Used in the 2 Describes Below
              6
          4       8
        3   5   7   9
    */
    describe("remove child on left", () => {
      it("removes the element from the binary tree when it has no children", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 3;
        const valuesToInsert = [6, 4, 8, valueToRemove, 5, 7, 9];
        const expectedLevels = [[6], [4, 8], [5, 7, 9]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });

      it("removes the element from the binary tree when it has one left child", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 4;
        const valuesToInsert = [6, valueToRemove, 8, 3, 7, 9];
        const expectedLevels = [[6], [3, 8], [7, 9]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });

      it("removes the element from the binary tree when it has one right child", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 4;
        const valuesToInsert = [6, valueToRemove, 8, 5, 7, 9];
        const expectedLevels = [[6], [5, 8], [7, 9]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });

      it("removes the element from the binary tree when it has two children", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 4;
        const valuesToInsert = [6, valueToRemove, 8, 3, 5, 7, 9];
        const expectedLevels = [[6], [3, 8], [5, 7, 9]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });
    });

    describe("remove child on right", () => {
      it("removes the element from the binary tree when it has no children", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 9;
        const valuesToInsert = [6, 4, 8, 3, 5, 7, valueToRemove];
        const expectedLevels = [[6], [4, 8], [3, 5, 7]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });

      it("removes the element from the binary tree when it has one left child", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 8;
        const valuesToInsert = [6, 4, valueToRemove, 3, 5, 9];
        const expectedLevels = [[6], [4, 9], [3, 5]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });

      it("removes the element from the binary tree when it has one right child", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 8;
        const valuesToInsert = [6, 4, valueToRemove, 3, 5, 7];
        const expectedLevels = [[6], [4, 7], [3, 5]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });

      it("removes the element from the binary tree when it has two children", () => {
        const binarySearchTree = new BinarySearchTree();
        const valueToRemove = 8;
        const valuesToInsert = [6, 4, valueToRemove, 3, 5, 7, 9];
        const expectedLevels = [[6], [4, 7], [3, 5, 9]];
        valuesToInsert.forEach((v) => binarySearchTree.insert(v));

        binarySearchTree.remove(valueToRemove);

        expect(binarySearchTree.toLevels()).toEqual(expectedLevels);
        expect(
          binarySearchTree.breadthFirstSearchForValue(valueToRemove)
        ).toEqual(false);
      });
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
