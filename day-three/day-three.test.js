import * as fs from 'fs';
import path from 'path';
import { binaryDiagnosticPartOne } from './part-one';
import { lifeSupportRating } from './part-two';
import { splitDataByNewLine } from '../utils/splitData';

describe('AoC Day 3 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data);

  it('Part one passes with test data', () => {
    const result = binaryDiagnosticPartOne(parsedData);
    expect(result).toEqual(198);
  });

  it('Part two passes with test data', () => {
    const result = lifeSupportRating(parsedData);
    expect(result).toEqual(230);
  });
});
