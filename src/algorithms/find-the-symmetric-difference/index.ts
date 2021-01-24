export type Input = number[][]
export type Output = number[]

function deduplicate<T> (arr: T[]): T[] {
  return [...new Set(arr)]
}

function getDiff (arr1: number[], arr2: number[]): number[] {
  return [
    ...arr1.filter(el => !arr2.includes(el)),
    ...arr2.filter(el => !arr1.includes(el))
  ]
}

export function sym (...args: Input): Output {
  return deduplicate(
    args
      .reduce(getDiff, [])
      .sort((a, b) => a - b)
  )
}
