export function quickSort (array: number[]): number[] {
  // Exit the recursive
  if (array.length === 0) {
    return array
  }

  // Pivot selection can be important for performances
  const pivot = array[0]

  // Sort elements into three piles
  const smallerItems = []
  const equalItems = []
  const biggerItems = []

  for (const element of array) {
    if (element === pivot) {
      equalItems.push(element)
    } else if (element > pivot) {
      biggerItems.push(element)
    } else {
      smallerItems.push(element)
    }
  }

  // TODO: Does respect the PTC ?
  // See: https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/
  // Recusrively calling the function ...
  // ... to the left and to the right of the pivot
  return [
    ...quickSort(smallerItems),
    ...equalItems,
    ...quickSort(biggerItems)
  ]
}
