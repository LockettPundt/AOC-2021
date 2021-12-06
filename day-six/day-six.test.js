import * as fs from 'fs';
import path from 'path';
import { lanternfishPartOne } from './part-one';
import { splitDataByRegEx } from '../utils/splitData';

describe('AoC Day 6 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByRegEx(data, new RegExp(/,/, 'g'));

  it('Part one passes with test data', () => {
    const result = lanternfishPartOne(parsedData);
    expect(result).toEqual(5934);
  });
});
