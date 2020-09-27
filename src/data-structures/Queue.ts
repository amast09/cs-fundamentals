class Queue<T> {
  private elements: T[] = [];

  enqueue(element: T): void {
    this.elements.push(element);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }
}

export default Queue;
