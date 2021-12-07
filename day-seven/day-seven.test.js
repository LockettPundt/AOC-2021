import * as fs from 'fs';
import path from 'path';
import { treacheryOfWhalesPartOne } from './part-one';
import { treacheryOfWhalesPartTwo } from './part-two';
import { splitDataByRegEx } from '../utils/splitData';

describe('AoC Day 7 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByRegEx(data, new RegExp(/,/, 'g'));

  it('Part one passes with test data', () => {
    const result = treacheryOfWhalesPartOne(parsedData.map(Number));
    expect(result).toEqual(37);
  });
  it('Part two passes with test data', () => {
    const result = treacheryOfWhalesPartTwo(parsedData.map(Number));
    expect(result).toEqual(168);
  });
});
