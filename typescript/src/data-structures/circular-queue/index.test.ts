import CircularQueue from './index'

enum Size {
  SMALLER = 3,
  FULL = 5,
  BIGGER = 7
}

describe('Data structures: CircularQueue', () => {
  const itemsToAdd = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  it('The enqueue method should add items to the circular queue.', () => {
    const queue = new CircularQueue(Size.FULL)

    itemsToAdd.slice(0, Size.SMALLER).forEach((item) => queue.enqueue(item))

    expect(queue.print()).toEqual(['a', 'b', 'c', null, null])
  })

  it('You should not enqueue items past the read pointer', () => {
    const queue = new CircularQueue(Size.FULL)

    itemsToAdd.forEach((item) => queue.enqueue(item))

    expect(queue.print()).toEqual(itemsToAdd.slice(0, Size.FULL))
    expect(queue.enqueue('f')).toEqual(null)
  })

  it('The dequeue method should dequeue items from the queue.', () => {
    const queue = new CircularQueue(Size.FULL)

    itemsToAdd.slice(0, Size.FULL).forEach((item) => queue.enqueue(item))
    itemsToAdd.slice(0, Size.FULL).forEach((item) => queue.dequeue())

    expect(queue.print()).toEqual([null, null, null, null, null])
  })

  it('After an item is dequeued, its position in the queue should be reset to null.', () => {
    const queue = new CircularQueue(Size.FULL)

    itemsToAdd.slice(0, Size.SMALLER).forEach((item) => queue.enqueue(item))
    queue.dequeue()

    expect(queue.print()[0]).toEqual(null)
  })

  it('Trying to dequeue past the write pointer should return null and does not advance the write pointer.', () => {
    const queue = new CircularQueue(Size.FULL)

    // enqueue then queue all the queue
    itemsToAdd.slice(0, Size.FULL).forEach((item) => queue.enqueue(item))
    itemsToAdd.slice(0, Size.FULL).forEach((item) => queue.dequeue())

    const unexistisingItem = queue.dequeue()

    expect(unexistisingItem).toEqual(null)
  })
})
