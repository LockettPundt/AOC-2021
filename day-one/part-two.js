import * as fs from 'fs'
import { splitDataByNewLine } from '../utils/splitData.js'
import { findNumberOfDepthIncreases } from './part-one.js'

const data = fs.readFileSync('data.txt', 'utf-8');
const parsedData = splitDataByNewLine(data)

const findNumberOfDepthIncreasesPartTwo = (input) => {
  const windows = []
  input.forEach((_, i, arr) => {
    if (arr[i + 2]) {
      windows.push(
        arr.slice(i, i + 3)
      )
    }
  })

  return findNumberOfDepthIncreases(
    windows.map(arr => arr.reduce((sum, x) => sum += Number(x), 0))
  )
}

console.log(findNumberOfDepthIncreasesPartTwo(parsedData))