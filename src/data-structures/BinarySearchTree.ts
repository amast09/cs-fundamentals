interface Node {
  readonly value: number;
  maybeLeftNode?: Node;
  maybeRightNode?: Node;
}

interface NodeWithLevel {
  readonly node: Node;
  readonly level: number;
}

interface NodeWithParent {
  readonly node: Node;
  readonly maybeParentNode?: Node;
}

enum SearchStrategy {
  DepthFirstSearch = "DepthFirstSearch",
  BreadthFirstSearch = "BreadthFirstSearch",
}

function isValueDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

class BinarySearchTree {
  private rootNode: Node | undefined;

  insert(value: number): void {
    if (this.rootNode === undefined) {
      this.rootNode = { value };
    } else {
      BinarySearchTree.addValueToNode(this.rootNode, value);
    }
  }

  remove(value: number): void {
    if (this.rootNode !== undefined) {
      const nodesToVisit: NodeWithParent[] = [{ node: this.rootNode }];
      const visitedNodes: Set<number> = new Set<number>();

      let nodeBeingVisited = nodesToVisit.shift();
      while (
        nodeBeingVisited !== undefined &&
        nodeBeingVisited.node.value !== value
      ) {
        if (!visitedNodes.has(nodeBeingVisited.node.value)) {
          visitedNodes.add(nodeBeingVisited.node.value);

          if (
            nodeBeingVisited.node.value > value &&
            nodeBeingVisited.node.maybeLeftNode
          ) {
            nodesToVisit.push({
              node: nodeBeingVisited.node.maybeLeftNode,
              maybeParentNode: nodeBeingVisited.node,
            });
          } else if (nodeBeingVisited.node.maybeRightNode) {
            nodesToVisit.push({
              node: nodeBeingVisited.node.maybeRightNode,
              maybeParentNode: nodeBeingVisited.node,
            });
          }
        }

        nodeBeingVisited = nodesToVisit.shift();
      }

      if (nodeBeingVisited !== undefined) {
        const { node, maybeParentNode } = nodeBeingVisited;
        if (maybeParentNode === undefined) {
          this.rootNode = undefined;
        } else {
          if (maybeParentNode.maybeLeftNode === node) {
            if (node.maybeLeftNode && node.maybeRightNode) {
              maybeParentNode.maybeLeftNode = node.maybeLeftNode;
              node.maybeLeftNode.maybeRightNode = node.maybeRightNode;
            } else if (node.maybeLeftNode) {
              maybeParentNode.maybeLeftNode = node.maybeLeftNode;
            } else if (node.maybeRightNode) {
              maybeParentNode.maybeLeftNode = node.maybeRightNode;
            } else {
              maybeParentNode.maybeLeftNode = undefined;
            }
          } else if (maybeParentNode.maybeRightNode === node) {
            if (node.maybeLeftNode && node.maybeRightNode) {
              maybeParentNode.maybeRightNode = node.maybeLeftNode;
              node.maybeLeftNode.maybeRightNode = node.maybeRightNode;
            } else if (node.maybeLeftNode) {
              maybeParentNode.maybeRightNode = node.maybeLeftNode;
            } else if (node.maybeRightNode) {
              maybeParentNode.maybeRightNode = node.maybeRightNode;
            } else {
              maybeParentNode.maybeRightNode = undefined;
            }
          }
        }
      }
    }
  }

  depthFirstSearchForValue(
    value: number,
    // wanted to test both my iterative and recursive implementations
    useRecursion: boolean = false
  ): boolean {
    if (this.rootNode === undefined) {
      return false;
    } else {
      const node = useRecursion
        ? BinarySearchTree.recursiveDepthFirstSearch(this.rootNode, value)
        : BinarySearchTree.iterativeSearch(
            SearchStrategy.DepthFirstSearch,
            this.rootNode,
            value
          );

      return node !== undefined;
    }
  }

  breadthFirstSearchForValue(value: number): boolean {
    if (this.rootNode === undefined) {
      return false;
    } else {
      const node = BinarySearchTree.iterativeSearch(
        SearchStrategy.BreadthFirstSearch,
        this.rootNode,
        value
      );

      return node !== undefined;
    }
  }

  toLevels(): Array<number[]> {
    const levels: Array<number[]> = [];

    if (this.rootNode !== undefined) {
      const nodesToVisit: NodeWithLevel[] = [{ node: this.rootNode, level: 0 }];
      const visitedNodes: Set<number> = new Set<number>();

      let nodeBeingVisitedWithLevel = nodesToVisit.shift();
      while (nodeBeingVisitedWithLevel !== undefined) {
        const { node, level } = nodeBeingVisitedWithLevel;

        if (!visitedNodes.has(node.value)) {
          levels[level] = levels[level] ?? [];
          levels[level].push(node.value);
          visitedNodes.add(node.value);
          [node.maybeLeftNode, node.maybeRightNode]
            .filter(isValueDefined)
            .forEach((node) => nodesToVisit.push({ node, level: level + 1 }));
        }

        nodeBeingVisitedWithLevel = nodesToVisit.shift();
      }
    }

    return levels;
  }

  private static recursiveDepthFirstSearch(
    node: Node,
    value: number
  ): Node | undefined {
    if (node.value === value) {
      return node;
    } else {
      if (node.value > value) {
        return (
          node.maybeLeftNode &&
          BinarySearchTree.recursiveDepthFirstSearch(node.maybeLeftNode, value)
        );
      } else {
        return (
          node.maybeRightNode &&
          BinarySearchTree.recursiveDepthFirstSearch(node.maybeRightNode, value)
        );
      }
    }
  }

  private static iterativeSearch(
    searchStrategy: SearchStrategy,
    node: Node,
    value: number
  ): Node | undefined {
    const nodesToVisit = [node];
    const visitedNodes: Set<number> = new Set<number>();

    const getNextNode = (): Node | undefined =>
      searchStrategy === SearchStrategy.BreadthFirstSearch
        ? nodesToVisit.shift()
        : nodesToVisit.pop();

    let nodeBeingVisited = getNextNode();

    while (nodeBeingVisited !== undefined && nodeBeingVisited.value !== value) {
      if (!visitedNodes.has(nodeBeingVisited.value)) {
        visitedNodes.add(nodeBeingVisited.value);

        if (nodeBeingVisited.value > value && nodeBeingVisited.maybeLeftNode) {
          nodesToVisit.push(nodeBeingVisited.maybeLeftNode);
        } else if (nodeBeingVisited.maybeRightNode) {
          nodesToVisit.push(nodeBeingVisited.maybeRightNode);
        }
      }

      nodeBeingVisited = getNextNode();
    }

    return nodeBeingVisited;
  }

  private static addValueToNode(node: Node, value: number): void {
    if (value > node.value) {
      if (node.maybeRightNode === undefined) {
        node.maybeRightNode = { value };
      } else {
        BinarySearchTree.addValueToNode(node.maybeRightNode, value);
      }
    } else {
      if (node.maybeLeftNode === undefined) {
        node.maybeLeftNode = { value };
      } else {
        BinarySearchTree.addValueToNode(node.maybeLeftNode, value);
      }
    }
  }
}

export default BinarySearchTree;
