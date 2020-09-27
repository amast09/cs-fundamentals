interface Node {
  readonly value: number;
  maybeLeftNode?: Node;
  maybeRightNode?: Node;
}

interface NodeWithLevel {
  readonly node: Node;
  readonly level: number;
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
    console.log(value);
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
