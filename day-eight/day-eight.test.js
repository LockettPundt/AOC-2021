import * as fs from 'fs';
import path from 'path';
import { sevenSegmentSearchPartOne } from './part-one';
import { sevenSegmentSearchPartTwo, constructSegmentKey } from './part-two';
import { splitDataByNewLine, splitDataByRegEx } from '../utils/splitData';

describe('AoC Day 8 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data).map((d) =>
    splitDataByRegEx(d, new RegExp(/[|]/, 'g'))
  );

  it('Part one passes with test data', () => {
    const result = sevenSegmentSearchPartOne(
      parsedData.map((row) => row.map((x) => x.trim().split(' ')))
    );
    expect(result).toEqual(26);
  });
});
