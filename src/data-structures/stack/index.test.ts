import Stack from './index'

describe('Data Structures: Stack', () => {
  const globalStack = new Stack()

  beforeEach(() => {
    globalStack.addOne(1)
    globalStack.addOne(2)
    globalStack.addOne(3)
  })

  const expectedProperties = ['addOne', 'removeOne', 'next', 'isEmpty', 'clear', 'size']

  expectedProperties.forEach(property => {
    test(`Stack class should have a ${property}() method.`, () => {
      expect(globalStack).toHaveProperty(property)
    })
  })

  test('The next() method should return the top element of the stack', () => {
    expect(globalStack.next()).toBe(3)
  })

  test('The removeOne() method should remove and return the top element of the stack', () => {
    expect(globalStack.removeOne()).toBe(3)
  })

  test('The isEmpty() method should return true if a stack does not contain any elements', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBeTruthy()
  })

  test('The clear() method should remove all element from the stack', () => {
    globalStack.clear()
    expect(globalStack.size()).toBe(0)
  })

  afterEach(() => {
    globalStack.clear()
  })
})
