import { opposites } from './part-one';

export const closers = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

export const syntaxScoringPartTwo = (input) => {
  const openers = Object.values(opposites);
  const results = input.reduce((row, x) => {
    const arr = x.split('');
    const stack = [];
    for (const char of arr) {
      if (openers.includes(char)) {
        stack.push(char);
      } else if (stack[stack.length - 1] === opposites[char]) {
        stack.pop();
      } else {
        return row;
      }
    }
    return [...row, stack];
  }, []);

  const scoreMap = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
  };
  const oppositeResults = results
    .map(getOpposites)
    .map(getScore(scoreMap))
    .sort((a, b) => a - b);

  return oppositeResults[Math.floor(oppositeResults.length / 2)];
};

const getOpposites = (arr) => arr.reverse().map((x) => closers[x]);

const getScore = (scoreMap) => (arr) =>
  arr.reduce((sum, x) => 5 * sum + scoreMap[x], 0);
