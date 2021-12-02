import { findNumberOfDepthIncreases } from './part-one.js'

export const findNumberOfDepthIncreasesPartTwo = (input) => {
  const windows = input.reduce((obj, _, i, arr) => {
    if (arr[i + 2]) {
      obj.push(
        arr.slice(i, i + 3).reduce((sum, x) => sum += Number(x), 0)
      )
    }
    return obj
  }, [])

  return findNumberOfDepthIncreases(windows)
}