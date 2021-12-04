import * as fs from 'fs';
import path from 'path';
import { giantSquidPartOne } from './part-one';
import { splitDataByRegEx } from '../utils/splitData';

describe('AoC Day 3 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByRegEx(data, new RegExp(/\s\n/, 'g'));

  it('Part one passes with test data', () => {
    const result = giantSquidPartOne(parsedData);
    expect(result).toEqual(4512);
  });
});
