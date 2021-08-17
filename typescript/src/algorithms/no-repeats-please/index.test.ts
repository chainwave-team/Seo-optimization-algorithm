import { permAlone } from './index'

describe('Algorithms: No Repeats Please', () => {
  const tests: Array<{ args: string, expected: number }> = [
    { args: 'aab', expected: 2 },
    { args: 'aaa', expected: 0 },
    { args: 'aabb', expected: 8 },
    { args: 'abcdefa', expected: 3600 },
    { args: 'abfdefa', expected: 2640 },
    { args: 'zzzzzzzz', expected: 0 },
    { args: 'a', expected: 1 },
    { args: 'aaab', expected: 0 },
    { args: 'aaabb', expected: 12 }
  ]

  tests.forEach(({ args, expected }) => {
    const output = permAlone(args)

    it(`permAlone('${args}') should return a number.`, () => {
      expect(typeof output).toBe('number')
    })
    it(`permAlone('${args}') should return ${expected}.`, () => {
      expect(output).toStrictEqual(expected)
    })
  })
})
