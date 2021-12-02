import { splitDataByNewLine } from './splitData.js'

describe('Utils', () => {
  it(
    'can split a file with line breaks into an array of strings', () => {
      const stringWithNewLines = `199\n200\n208\n210`
      expect(splitDataByNewLine(stringWithNewLines)).toHaveLength(4)
    }
  )
})