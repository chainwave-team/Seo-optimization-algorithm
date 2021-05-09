function splitArray (array: number[]): number[][] {
  const half = Math.round(array.length / 2)

  return [
    array.slice(0, half),
    array.slice(half, array.length)
  ]
}

/**
 * Take two arrays
 * Return merged and sorted array
 */
function fusion (a: number[], b: number[]): number[] {
  if (a.length === 0) return b
  if (b.length === 0) return a

  if (a[0] <= b[0]) {
    const [first, ...rest] = a
    return [first, ...fusion(rest, b)]
  } else {
    const [first, ...rest] = b
    return [first, ...fusion(a, rest)]
  }
}

export function mergeSort (array: number[]): number[] {
  // Exit the recursivity
  if (array.length <= 1) {
    return array
  }

  const [array1, array2] = splitArray(array)

  return fusion(
    mergeSort(array1),
    mergeSort(array2)
  )
}
