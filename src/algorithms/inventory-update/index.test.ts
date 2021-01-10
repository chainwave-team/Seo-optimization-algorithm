import { assert } from 'chai'
import { InventoryItem, updateInventory } from './index'

describe('Algorithms: Inventory Update', () => {
  const tests: Array<{ args: [InventoryItem[], InventoryItem[]], expected: InventoryItem[] }> = [
    {
      args: [
        [
          [21, 'Bowling Ball'],
          [2, 'Dirty Sock'],
          [1, 'Hair Pin'],
          [5, 'Microphone']
        ],
        [
          [2, 'Hair Pin'],
          [3, 'Half-Eaten Apple'],
          [67, 'Bowling Ball'],
          [7, 'Toothpaste']
        ]
      ],
      expected: [[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']]
    },
    {
      args: [
        [
          [21, 'Bowling Ball'],
          [2, 'Dirty Sock'],
          [1, 'Hair Pin'],
          [5, 'Microphone']
        ],
        []
      ],
      expected: [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']]
    },
    {
      args: [
        [], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]
      ],
      expected: [[67, 'Bowling Ball'], [2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [7, 'Toothpaste']]
    }, {
      args: [
        [[0, 'Bowling Ball'], [0, 'Dirty Sock'], [0, 'Hair Pin'], [0, 'Microphone']], [[1, 'Hair Pin'], [1, 'Half-Eaten Apple'], [1, 'Bowling Ball'], [1, 'Toothpaste']]
      ],
      expected: [[1, 'Bowling Ball'], [0, 'Dirty Sock'], [1, 'Hair Pin'], [1, 'Half-Eaten Apple'], [0, 'Microphone'], [1, 'Toothpaste']]
    }
  ]

  tests.forEach(({ args: [arr1, arr2], expected }) => {
    function arrayToString (arr: InventoryItem[]): string {
      return arr.length > 0
        ? `${arr.map(el => `[${el.toString()}]`).join(',')}`
        : '[]'
    }
    const inputAsString = `[${arrayToString(arr1)}, ${arrayToString(arr2)}]`
    const inventory = updateInventory(arr1, arr2)

    it(`updateInventory(${inputAsString}) should return [${arrayToString(expected)}].`, () => {
      assert.sameDeepMembers(inventory, expected)
    })

    it(`updateInventory(${inputAsString}) should contain only ${expected.length} elements.`, () => {
      assert.isArray(inventory)
      assert.lengthOf(inventory, expected.length)
    })
  })
})
