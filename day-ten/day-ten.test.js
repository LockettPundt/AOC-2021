import * as fs from 'fs';
import path from 'path';
import { splitDataByNewLine } from '../utils/splitData';
import { syntaxScoringPartOne } from './part-one';
import { syntaxScoringPartTwo } from './part-two';

describe('AoC Day 10 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByNewLine(data);

  it('Part one passes with test data', () => {
    const result = syntaxScoringPartOne(parsedData);
    expect(result).toEqual(26397);
  });
  it('Part two passes with test data', () => {
    const result = syntaxScoringPartTwo(parsedData);
    expect(result).toEqual(288957);
  });
});
