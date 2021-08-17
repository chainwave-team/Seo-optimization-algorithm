import * as index from './index'

describe('Algorithms: Find the Symmetric Difference', function () {
  const tests: Array<{ args: index.Input, expected: index.Output }> = [
    {
      args: [[1, 2, 3], [5, 2, 1, 4]], expected: [3, 4, 5]
    },
    {
      args: [[1, 2, 3, 3], [5, 2, 1, 4]], expected: [3, 4, 5]
    },
    {
      args: [[1, 2, 3], [5, 2, 1, 4, 5]], expected: [3, 4, 5]
    },
    {
      args: [[1, 2, 5], [2, 3, 5], [3, 4, 5]], expected: [1, 4, 5]
    },

    {
      args: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]], expected: [1, 4, 5]
    },
    {
      args: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]], expected: [2, 3, 4, 6, 7]
    },
    {
      args: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]], expected: [1, 2, 4, 5, 6, 7, 8, 9]
    }
  ]

  test('[1,2,3] to equal [1, 2, 3] but not [1, 3, 2] #order matter', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3])
    expect([1, 2, 3]).not.toEqual([1, 3, 2])
  })

  tests.forEach(({ args, expected }) => {
    const inputAsString = `[${args.map(arg => `[${arg.toString()}]`).join(', ')}]`
    const result = index.sym(...args)

    it(`sym(${inputAsString}) should return [${expected.toString()}].`, function () {
      expect(result).toEqual(expected)
    })
    it(`sym(${inputAsString}) should contain only ${expected.length} elements.`, function () {
      expect(result).toHaveLength(expected.length)
    })
  })
})
