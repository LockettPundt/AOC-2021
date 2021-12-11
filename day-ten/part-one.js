export const opposites = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
};

export const syntaxScoringPartOne = (input) => {
  const openers = Object.values(opposites);
  const illegalCharacters = [];
  for (const row of input) {
    const arr = row.split('');
    const stack = [];
    for (const char of arr) {
      if (openers.includes(char)) {
        stack.push(char);
      } else if (stack[stack.length - 1] === opposites[char]) {
        stack.pop();
      } else {
        illegalCharacters.push(char);
        break;
      }
    }
    console.log(stack);
  }
  return getScore(scores)(illegalCharacters);
};

const scores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

export const getScore = (scoreMap) => (arr) =>
  arr.reduce((sum, x) => (sum += scoreMap[x]), 0);
