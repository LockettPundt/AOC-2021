import * as fs from 'fs';
import path from 'path';
import { giantSquidPartOne, isWinningBoard } from './part-one';
import { giantSquidPartTwo } from './part-two';
import { splitDataByRegEx } from '../utils/splitData';
import { winningRow, losingBoard, winningColumn } from './test-boards';

describe('AoC Day 4 Tests', () => {
  const file = path.join(__dirname, './', 'test-data.txt');
  const data = fs.readFileSync(file, 'utf-8');
  const parsedData = splitDataByRegEx(data, new RegExp(/\s\n/, 'g'));

  it('Part one passes with test data', () => {
    const result = giantSquidPartOne(parsedData);
    expect(result).toEqual(4512);
  });

  it('Part two passes with test data', () => {
    const result = giantSquidPartTwo(parsedData);
    expect(result).toEqual(1924);
  });
});

describe('Day 4 functions', () => {
  it.each([
    [winningRow, true],
    [losingBoard, false],
    [winningColumn, true],
  ])(
    'The isWinningBoard function correctly determines if a board has a winning row or column',
    (board, expectedValue) => {
      expect(isWinningBoard(board)).toBe(expectedValue);
    }
  );
});
