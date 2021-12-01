import * as fs from 'fs'
import { splitDataByNewLine } from '../utils/splitData.js'
import { findNumberOfDepthIncreases } from './part-one.js'

const data = fs.readFileSync('data.txt', 'utf-8');
const parsedData = splitDataByNewLine(data)

const findNumberOfDepthIncreasesPartTwo = (input) => {
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

console.log(findNumberOfDepthIncreasesPartTwo(parsedData))