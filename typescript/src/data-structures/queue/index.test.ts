import Queue from './index'

describe('Data Structures: Queue', () => {
  const globalQueue = new Queue()

  const expectedProperties: string[] = [
    'addOne',
    'removeOne',
    'next',
    'size',
    'isEmpty',
    'clear'
  ]

  beforeEach(() => {
    globalQueue.addOne(1)
    globalQueue.addOne(2)
    globalQueue.addOne(3)
  })

  expectedProperties.forEach(property =>
    it(`Your Queue class should have a ${property}() method.`, () => {
      expect(globalQueue).toHaveProperty(property)
    })
  )

  it('The removeOne() method should remove and return the front element of the queue', () => {
    expect(globalQueue.removeOne()).toBe(1)
  })

  it('The next() method should return value of the front element of the queue', () => {
    expect(globalQueue.next()).toBe(1)
  })

  it('The size() method should return the length of the queue', () => {
    expect(globalQueue.size()).toBe(3)
  })

  it('The isEmpty() method should return false if there are elements in the queue', () => {
    expect(globalQueue.isEmpty()).toBe(false)
  })

  it('The clear() method should empty the queue then this size must be 0', () => {
    globalQueue.clear()

    expect(globalQueue.size()).toBe(0)
  })

  afterEach(() => {
    globalQueue.clear()
  })
})
