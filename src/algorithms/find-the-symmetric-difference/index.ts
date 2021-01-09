export type Input = number[][]
export type Output = number[]

function includes<T> (arr: T[], item: T): boolean {
  return arr.indexOf(item) !== -1
}

function deduplicate<T> (arr: T[]): T[] {
  return [...new Set(arr)]
}

function getDiff (arr1: number[], arr2: number[]): number[] {
  return [
    ...arr1.filter(el => !includes(arr2, el)),
    ...arr2.filter(el => !includes(arr1, el))
  ]
}

export function sym (...args: Input): Output {
  return deduplicate(
    args
      .reduce(getDiff, [])
      .sort((a, b) => a - b)
  )
}
