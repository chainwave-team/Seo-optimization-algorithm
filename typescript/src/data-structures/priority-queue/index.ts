import Queue from '../queue'

export type Item<T> = [T, number]

class PriorityQueue<T> extends Queue<Item<T>> {
  protected collection: Array<Item<T>> = []

  addOne (item: Item<T>): void {
    const index = this.collection.findIndex(el => item[1] > el[1])

    if (index !== -1) {
      this.collection.splice(index, 0, item)
    } else {
      this.collection.push(item)
    }
  }
}

export default PriorityQueue
