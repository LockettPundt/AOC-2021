export const treacheryOfWhalesPartTwo = (input) => {
  const lowestPosition = Math.min(...input);
  const highestPosition = Math.max(...input);
  const results = [];
  for (let i = lowestPosition; i <= highestPosition; i++) {
    results.push(
      input.reduce((sum, x) => {
        const numberOfmovements = Array.from({
          length: Math.abs(x - i),
        }).reduce(
          (sumOfMovements, _, index) => (sumOfMovements += index + 1),
          0
        );
        sum += numberOfmovements;
        return sum;
      }, 0)
    );
  }
  return Math.min(...results);
};
