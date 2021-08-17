import { Collection } from '../types'

class Stack<T> extends Collection<T> {
  protected collection: T[] = []

  addOne (item: T): void {
    this.collection.push(item)
  }

  removeOne (): T | undefined {
    return this.collection.pop()
  }

  next (): T | undefined {
    return this.collection[this.size() - 1]
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

export default Stack
