function findPermutations (str: string): string[] {
  if (str.length < 2) {
    return [str]
  }

  const permutations: string[] = []

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    const missingLetters = str.slice(0, i) + str.slice(i + 1, str.length)

    for (const permutation of findPermutations(missingLetters)) {
      permutations.push(letter + permutation)
    }
  }

  return permutations
}

function hasNoConsecutiveLetter (str: string): boolean {
  const regExp = new RegExp(/([a-z])\1/)
  return !regExp.test(str)
}

export function permAlone (str: string): number {
  return findPermutations(str).filter(hasNoConsecutiveLetter).length
}
