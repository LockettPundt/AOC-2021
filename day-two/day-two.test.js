import * as fs from 'fs'
import path from 'path'
import { submarinePilotPartOne } from './part-one'
import { submarinePilotPartTwo } from './part-two'
import { splitDataByNewLine } from '../utils/splitData'

describe('AoC Day Two Tests', () => {
  const file = path.join(__dirname, "./", "test-data.txt")
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data) 

  it('Part one passes with test data', () => {
    const result = submarinePilotPartOne(parsedData)
    expect(result).toEqual(150)
  })

  it('Part two passes with test data', () => {
    const result = submarinePilotPartTwo(parsedData)
    expect(result).toEqual(900)
  })
})