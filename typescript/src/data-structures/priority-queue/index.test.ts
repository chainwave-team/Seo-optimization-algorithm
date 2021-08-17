import PriorityQueue, { Item } from './index'

type Person = Item<string>

describe('Data structures: PriorityQueue', () => {
  const globalPriorityQueue = new PriorityQueue<string>()

  const expectedProperties = [
    'addOne',
    'removeOne',
    'next',
    'size',
    'isEmpty',
    'clear'
  ]

  expectedProperties.forEach(property =>
    it(`Your PriorityQueue class should have a ${property}() method.`, () => {
      expect(globalPriorityQueue).toHaveProperty(property)
    })
  )

  const enum Priority { LOW, MEDIUM, HIGH }

  const peopleArriving: Person[] = [
    ['Luc', Priority.LOW],
    ['Juliette', Priority.HIGH],
    ['Pierre', Priority.MEDIUM],
    ['Joe', Priority.LOW],
    ['Tim', Priority.MEDIUM],
    ['Sully', Priority.LOW]
  ]

  const peopleLeaving: Person[] = [
    ['Juliette', Priority.HIGH],
    ['Pierre', Priority.MEDIUM],
    ['Tim', Priority.MEDIUM],
    ['Luc', Priority.LOW],
    ['Joe', Priority.LOW],
    ['Sully', Priority.LOW]
  ]

  test('Your PriorityQueue class should correctly keep track of the current number of items using the size method as items are enqueued and dequeued.', () => {
    expect(globalPriorityQueue.size()).toBe(0)

    globalPriorityQueue.addOne(peopleArriving[0])
    globalPriorityQueue.addOne(peopleArriving[1])

    expect(globalPriorityQueue.size()).toBe(2)

    globalPriorityQueue.removeOne()

    expect(globalPriorityQueue.size()).toBe(1)
  })

  test('The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.', () => {
    peopleArriving.forEach(person => {
      globalPriorityQueue.addOne(person)
    })

    peopleLeaving.forEach(person => {
      expect(globalPriorityQueue.next()).toStrictEqual(person)
      expect(globalPriorityQueue.removeOne()).toStrictEqual(person)
    })
  })

  afterEach(() => {
    globalPriorityQueue.clear()
  })
})
