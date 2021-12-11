import * as fs from 'fs';
import path from 'path';
import { splitDataByNewLine } from '../utils/splitData';
import { smokeBasinPartOne } from './part-one';

describe('AoC Day 9 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data);

  it('Part one passes with test data', () => {
    const result = smokeBasinPartOne(parsedData);
    expect(result).toEqual(15);
  });
});
