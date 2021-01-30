import { Collection } from '../types'

class Queue<T> extends Collection<T> {
  protected collection: T[] = []

  addOne (item: T): void {
    this.collection.push(item)
  }

  removeOne (): T | undefined {
    return this.collection.shift()
  }

  next (): T | undefined {
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
