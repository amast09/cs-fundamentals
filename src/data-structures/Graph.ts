interface Vertex {
  readonly value: number;
  readonly neighbors: Set<Vertex>;
}

interface Edge {
  readonly from: number;
  readonly to: number;
}

class Graph {
  private rootNode: Vertex | undefined;

  insert(edge: Edge): void {
    console.log(this.rootNode);
    console.log(edge);
  }

  remove(value: number): void {
    console.log(value);
  }

  depthFirstSearchForValue(value: number): boolean {
    console.log(value);
    return false;
  }

  breadthFirstSearchForValue(value: number): boolean {
    console.log(value);
    return false;
  }
}

export default Graph;
