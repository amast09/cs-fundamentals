import Graph from "./Graph";

describe("Graph", () => {
  describe("remove", () => {
    it("does not error when there are no nodes", () => {
      const graph = new Graph();
      expect(graph.remove(9)).not.toThrow();
    });

    it("removes the root element when it is the only node", () => {});

    it("removes the element when it exists in the graph", () => {});
  });

  describe("insert", () => {
    it("adds the node into the graph", () => {});
  });

  describe("depthFirstSearchForValue", () => {
    it("returns false when the node does not exist in the graph", () => {});
    it("returns true when the node does exist in the graph", () => {});
  });

  describe("breadthFirstSearchForValue", () => {
    it("returns false when the node does not exist in the graph", () => {});
    it("returns true when the node does exist in the graph", () => {});
  });

  describe("toArray", () => {
    it("serializes an empty tree correctly", () => {});
  });
});
