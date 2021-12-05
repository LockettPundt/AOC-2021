import * as fs from 'fs';
import path from 'path';
import { splitDataByNewLine } from '../utils/splitData';
import { hydrothermalVentsPartOne } from './part-one';

describe('AoC Day 5 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data);

  it('Part one passes with test data', () => {
    const result = hydrothermalVentsPartOne(parsedData);
    expect(result).toEqual(5);
  });

  it.skip('Part two passes with test data', () => {});
});
