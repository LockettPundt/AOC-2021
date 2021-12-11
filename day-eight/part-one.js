export const sevenSegmentSearchPartOne = (input) => {
  return input.reduce(
    (sum, [, output]) =>
      (sum += output.reduce((outputSum, x) => {
        if ([2, 3, 4, 7].includes(x.length)) {
          outputSum += 1;
        }
        return outputSum;
      }, 0)),
    0
  );
};
