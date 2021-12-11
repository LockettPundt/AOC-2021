export const smokeBasinPartOne = (input) => {
  const parsedInput = input.map((x) => x.split('').map((x) => Number(x) + 1));
  const lowPoints = parsedInput.map((row, i, inputArr) =>
    row.filter((num, index, arr) => {
      const isLowPoint = [];
      if (arr[index - 1]) {
        if (arr[index - 1] > num) {
          isLowPoint.push(true);
        } else {
          isLowPoint.push(false);
        }
      }

      if (arr[index + 1]) {
        if (arr[index + 1] > num) {
          isLowPoint.push(true);
        } else {
          isLowPoint.push(false);
        }
      }

      if (inputArr[i - 1]?.[index]) {
        if (inputArr[i - 1][index] > num) {
          isLowPoint.push(true);
        } else {
          isLowPoint.push(false);
        }
      }

      if (inputArr[i + 1]?.[index]) {
        if (inputArr[i + 1][index] > num) {
          isLowPoint.push(true);
        } else {
          isLowPoint.push(false);
        }
      }
      return isLowPoint.every(Boolean);
    })
  );

  return lowPoints.flat().reduce((sum, num) => (sum += num), 0);
};
