export default class CircularQueue<T> {
  queue: Array<T | null>
  read: number
  write: number
  max: number

  constructor (size: number) {
    this.queue = []
    this.read = 0
    this.write = 0
    this.max = size - 1

    while (size > 0) {
      this.queue.push(null)
      size--
    }
  }

  print (): Array<T | null> {
    return this.queue
  }

  enqueue (item: T): T | null {
    if (this.queue[this.write] !== null) return null

    this.queue[this.write] = item
    this.write = this.incrementOrReset(this.write)

    return item
  }

  dequeue (): T | null {
    if (this.queue[this.read] === null) return null

    const item = this.queue[this.read]
    this.queue[this.read] = null
    this.read = this.incrementOrReset(this.read)

    return item
  }

  incrementOrReset (i: number): number {
    return i >= this.max ? 0 : i + 1
  }
}
