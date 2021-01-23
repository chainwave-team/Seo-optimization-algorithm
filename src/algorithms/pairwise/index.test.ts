import { assert } from 'chai'
import { pairwise } from './index'

describe('Algorithms: Pairwise', () => {
  const tests: Array<{args: [number[], number], expected: number }> = [
    { args: [[1, 4, 2, 3, 0, 5], 7], expected: 11 },
    { args: [[1, 3, 2, 4], 4], expected: 1 },
    { args: [[1, 1, 1], 2], expected: 1 },
    { args: [[0, 0, 0, 0, 1, 1], 1], expected: 10 },
    { args: [[], 100], expected: 0 }
  ]

  tests.forEach(({ args: [arr, arg], expected }) => {
    const output = pairwise(arr, arg)

    it(`permAlone('${[arr, arg].join(' | ')}') should return a number.`, () => {
      assert.isNumber(output)
    })
    it(`permAlone('${[arr, arg].join(' | ')}') should return ${expected}.`, () => {
      assert.strictEqual(output, expected)
    })
  })
})
