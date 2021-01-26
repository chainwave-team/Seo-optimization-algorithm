class Queue<T> {
  private collection: T[] = []

  enqueue (element: T): void {
    this.collection.push(element)
  }

  dequeue (): T | undefined {
    return this.collection.shift()
  }

  front (): T | undefined {
    return this.collection[0]
  }

  size (): number {
    return this.collection.length
  }

  isEmpty (): boolean {
    return this.size() === 0
  }

  clear (): void {
    this.collection = []
  }
}

export default Queue
