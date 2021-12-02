import * as fs from 'fs'
import path from 'path'
import { findNumberOfDepthIncreases } from './part-one'
import { findNumberOfDepthIncreasesPartTwo } from './part-two'
import { splitDataByNewLine } from '../utils/splitData.js'

describe('AoC Day One Tests', () => {
  const file = path.join(__dirname, "./", "test-data.txt")
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data) 

  it('Part one passes with test data', () => {
    const result = findNumberOfDepthIncreases(parsedData)
    expect(result).toEqual(7)
  })

  it('Part two passes with test data', () => {
    const result = findNumberOfDepthIncreasesPartTwo(parsedData)
    expect(result).toEqual(5)
  })
})