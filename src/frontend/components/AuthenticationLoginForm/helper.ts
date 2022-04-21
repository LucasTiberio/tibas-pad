export const arrayPermutation = (permutation: string[] | number[]) => {
  return permutation
    .map((item, i) => {
      if (i % 2 !== 0) {
        const last = permutation[i - 1]
        return `${last} ou ${item}`
      }
    })
    .filter((item) => !!item)
}
