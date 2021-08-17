export function bubbleSort (array: number[]): number[] {
  let swapped = false

  for (let i = 0; i < array.length; i++) {
    const a = array[i]
    const b = array[i + 1]

    if (!isNaN(a) && !isNaN(b)) {
      if (a > b) {
        array[i] = b
        array[i + 1] = a
        swapped = true
      }
    }
  }

  if (!swapped) return array

  return bubbleSort(array)
}
