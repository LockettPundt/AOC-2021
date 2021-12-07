export const treacheryOfWhalesPartOne = (input) => {
  const lowestPosition = Math.min(...input);
  const highestPosition = Math.max(...input);
  const results = [];
  for (let i = lowestPosition; i <= highestPosition; i++) {
    results.push(input.reduce((sum, x) => (sum += Math.abs(x - i)), 0));
  }
  return Math.min(...results);
};
