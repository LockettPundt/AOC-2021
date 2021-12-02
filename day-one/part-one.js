
export const findNumberOfDepthIncreases = (input) => {   
  return input.reduce((sum, x, i, arr) => {
    const num = Number(x)
    if (arr[i - 1] && num > Number(arr[i - 1])) {
      return sum += 1
    }
    return sum
  }, 0)
}
