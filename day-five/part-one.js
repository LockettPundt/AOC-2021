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
        oceanFloor,
        start,
        stop,
        row: starting[0],
      });
    }
    if (starting[1] === ending[1]) {
      const [start, stop] = getStartingPoint(starting[0], ending[0]);
      oceanFloor = updateVertical({
        oceanFloor,
        start,
        stop,
        col: starting[1],
      });
    }
  }

  return getFinalScore(oceanFloor);
};

export const getFinalScore = (oceanFloor) =>
  oceanFloor.reduce((sum, floor) => {
    sum += floor.reduce((floorSum, x) => {
      if (x.hits > 1) {
        floorSum += 1;
      }
      return floorSum;
    }, 0);
    return sum;
  }, 0);

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

export const updateHorizontal = ({ oceanFloor, start, stop, row }) => {
  oceanFloor[row] = oceanFloor[row].map((spot, i) => {
    if (i >= start && i <= stop) {
      spot.hits += 1;
    }
    return spot;
  });
  return oceanFloor;
};

export const updateVertical = ({ oceanFloor, start, stop, col }) =>
  oceanFloor.map((spot, i) => {
    if (i >= start && i <= stop) {
      spot[col].hits += 1;
    }
    return spot;
  });

export const updateDiagonal = ({ oceanFloor, coordinate }) => {
  const diagonals = createDiagonals(coordinate);
  for (const [x, y] of diagonals) {
    oceanFloor[x] = oceanFloor[x].map((floor, i) => {
      if (i === y) {
        floor.hits += 1;
      }
      return floor;
    });
  }
  return oceanFloor;
};

const createDiagonals = (coordinate) => {
  const [start, stop] = coordinate;
  const length = Math.abs(start[0] - stop[0]) + 1;
  return Array.from({ length }).reduce((diagonals, _, i) => {
    const firstCoordinate = start[0] > stop[0] ? start[0] - i : start[0] + i;
    const secondCoordinate = start[1] > stop[1] ? start[1] - i : start[1] + i;
    const nextDiagonal = [firstCoordinate, secondCoordinate];
    return [...diagonals, nextDiagonal];
  }, []);
};

export const getStartingPoint = (numOne, numTwo) => {
  return [numOne, numTwo].sort((a, b) => a - b);
};
