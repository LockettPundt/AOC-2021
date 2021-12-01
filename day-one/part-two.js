import * as fs from 'fs'
import { splitDataByNewLine } from '../utils/splitData.js'

const data = fs.readFileSync('data.txt', 'utf-8');
const parsedData = splitDataByNewLine(data)

const findNumberOfDepthIncreases = (input) => {   
  return input.reduce((sum, x, i, arr) => {
    const num = Number(x)
    if (arr[i - 1] && num > Number(arr[i - 1])) {
      return sum += 1
    }
    return sum
  }, 0)
}

console.log(findNumberOfDepthIncreases(parsedData))