import Stack from './index'

describe('Data Structures: Stack', () => {
  const globalStack = new Stack()

  beforeEach(() => {
    globalStack.push(1)
    globalStack.push(2)
    globalStack.push(3)
  })

  const expectedProperties = ['push', 'pop', 'peek', 'isEmpty', 'clear']

  expectedProperties.forEach(property => {
    test(`Stack class should have a ${property} method.`, () => {
      expect(globalStack).toHaveProperty(property)
    })
  })

  test('The peek method should return the top element of the stack', () => {
    expect(globalStack.peek()).toBe(3)
  })

  test('The pop method should remove and return the top element of the stack', () => {
    expect(globalStack.pop()).toBe(3)
  })

  test('The isEmpty method should return true if a stack does not contain any elements', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBeTruthy()
  })

  test('The clear method should remove all element from the stack', () => {
    globalStack.clear()
    expect(globalStack.peek()).toBeFalsy()
  })

  afterEach(() => {
    globalStack.clear()
  })
})
