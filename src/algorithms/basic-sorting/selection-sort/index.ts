export function selectionSort (array: number[], startAt: number = 0): number[] {
  // 0. Break the recursive here
  if (startAt === array.length) {
    return array
  }

  // 1. Get the smallest item
  let smallest: number | null = null
  let smallestIndex: number = 0

  for (let i = startAt; i < array.length; i++) {
    if (smallest === null || smallest > array[i]) {
      smallest = array[i]
      smallestIndex = i
    }
  }

  // 2. Swap smallest item with the first item
  const first = array[startAt]
  array[startAt] = array[smallestIndex]
  array[smallestIndex] = first

  // 3. Repeat reccursivly step 1 & 2
  return selectionSort(array, startAt + 1)
}
