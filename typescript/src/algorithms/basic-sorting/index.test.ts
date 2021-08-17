import { bubbleSort } from './bubble-sort'
import { insertionSort } from './insertion-sort'
import { mergeSort } from './merge-sort'
import { quickSort } from './quick-sort'
import { selectionSort } from './selection-sort'

type SortingFunction = (array: number[]) => number[]

const sortingFunctions: Array<[string, SortingFunction]> = [
  ['Bubble Sorting', bubbleSort],
  ['Selection Sorting', selectionSort],
  ['Insertion Sorting', insertionSort],
  ['Quick Sorting', quickSort],
  ['Merge Sorting', mergeSort]
]

for (const [name, fn] of sortingFunctions) {
  describe(`Algorithms: ${name}`, () => {
    const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

    test('Should be a function', () => {
      expect(typeof fn).toBe('function')
    })

    test('Should return a sorted array (least to greatest)', () => {
      expect(fn(testArray)).toBeSorted()
    })

    test('Should return an array that is unchanged except for order', () => {
      expect(fn(testArray).length).toBe(testArray.length)
    })
  })
}
