export const hydrothermalVentsPartOne = (input) => {
  const formatedData = formatData(input);
  let oceanFloor = createOceanFloor(
    Math.max(...formatedData.flat().flat()) + 1
  );

  for (const coordinate of formatedData) {
    const [starting, ending] = coordinate;
    if (starting[0] === ending[0]) {
      const [start, stop] = getStartingPoint(starting[1], ending[1]);
      oceanFloor = updateHorizontal({
        oceanfloor: oceanFloor,
        start,
        stop,
        row: starting[0],
      });
    }
    if (starting[1] === ending[1]) {
      const [start, stop] = getStartingPoint(starting[0], ending[0]);
      oceanFloor = updateVertical({
        oceanfloor: oceanFloor,
        start,
        stop,
        col: starting[1],
      });
    }
  }

  const finalScore = oceanFloor.reduce((sum, floor) => {
    sum += floor.reduce((floorSum, x) => {
      if (x.hits > 1) {
        floorSum += 1;
      }
      return floorSum;
    }, 0);
    return sum;
  }, 0);
  return finalScore;
};

export const formatData = (input) =>
  input.map((x) =>
    x
      .replaceAll(' ', '')
      .split('->')
      .map((c) => c.split(',').map(Number))
  );

export const createOceanFloor = (length) =>
  Array.from({ length }).map(() =>
    Array.from({ length }).map(() => ({
      hits: 0,
    }))
  );

export const updateHorizontal = ({ oceanfloor, start, stop, row }) => {
  oceanfloor[row] = oceanfloor[row].map((spot, i) => {
    if (i >= start && i <= stop) {
      spot.hits += 1;
    }
    return spot;
  });
  return oceanfloor;
};

export const updateVertical = ({ oceanfloor, start, stop, col }) =>
  oceanfloor.map((spot, i) => {
    if (i >= start && i <= stop) {
      spot[col].hits += 1;
    }
    return spot;
  });

export const getStartingPoint = (numOne, numTwo) => {
  return [numOne, numTwo].sort((a, b) => a - b);
};
