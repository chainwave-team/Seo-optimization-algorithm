function recursiveSwap (array: number[], index: number = 0): number[] {
  if (index === 0) {
    return array
  }

  const currentItem = array[index]
  const prevItem = array[index - 1]

  if (currentItem >= prevItem) {
    return array
  }

  array[index] = prevItem
  array[index - 1] = currentItem

  return recursiveSwap(array, index - 1)
}

export function insertionSort (array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    recursiveSwap(array, i)
  }
  return array
}
