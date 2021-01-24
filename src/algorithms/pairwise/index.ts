type Pairwise = (
  arr: number[],
  arg: number,
  index?: number,
  usedIndexList?: number[]
) => number

export const pairwise: Pairwise = (arr, arg, index = 0, usedIndexList = []) => {
  if (arr.length === index) {
    return usedIndexList.reduce((prev, curr) => prev + curr, 0)
  }

  for (let i = index + 1; i < arr.length; i++) {
    // eslint-disable-line @typescript-eslint/prefer-includes
    if (!usedIndexList.includes(index) && !usedIndexList.includes(i)) {
      if (arr[index] + arr[i] === arg) {
        usedIndexList.push(...[index, i])
      }
    }
  }

  return pairwise(arr, arg, index + 1, usedIndexList)
}
