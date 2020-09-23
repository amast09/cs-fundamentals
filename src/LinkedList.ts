interface ListElement<T> {
  readonly element: T;
  maybeNextLinkElement?: ListElement<T>;
}

class LinkedList<T> {
  private rootElement: ListElement<T> | undefined;

  push(element: T): void {
    const newListElement = { element };
    const tail = this.getListElementTail();

    if (tail === undefined) {
      this.rootElement = newListElement;
    } else {
      tail.maybeNextLinkElement = newListElement;
    }
  }

  pop(): T | undefined {
    let maybeSecondToLastElement = this.rootElement;
    let maybeLastElement = maybeSecondToLastElement?.maybeNextLinkElement;
    let itemToPop = undefined;

    while (maybeLastElement?.maybeNextLinkElement !== undefined) {
      maybeSecondToLastElement = maybeLastElement;
      maybeLastElement = maybeLastElement.maybeNextLinkElement;
    }

    if (maybeLastElement === undefined) {
      this.rootElement = undefined;
      itemToPop = maybeSecondToLastElement?.element;
    } else if (maybeSecondToLastElement) {
      maybeSecondToLastElement.maybeNextLinkElement = undefined;
      itemToPop = maybeLastElement?.element;
    }

    return itemToPop;
  }

  head(): T | undefined {
    return this.rootElement?.element;
  }

  tail(): T | undefined {
    return this.getListElementTail()?.element;
  }

  private getListElementTail(): ListElement<T> | undefined {
    let nextElement = this.rootElement;

    while (nextElement?.maybeNextLinkElement !== undefined) {
      nextElement = nextElement?.maybeNextLinkElement;
    }

    return nextElement;
  }
}

export default LinkedList;
