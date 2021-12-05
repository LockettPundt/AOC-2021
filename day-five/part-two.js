import {
  formatData,
  createOceanFloor,
  updateDiagonal,
  updateHorizontal,
  updateVertical,
  getStartingPoint,
  getFinalScore,
} from './part-one';

export const hydroThermalVentsPartTwo = (input) => {
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
    } else if (starting[1] === ending[1]) {
      const [start, stop] = getStartingPoint(starting[0], ending[0]);
      oceanFloor = updateVertical({
        oceanFloor,
        start,
        stop,
        col: starting[1],
      });
    } else {
      oceanFloor = updateDiagonal({
        oceanFloor,
        coordinate,
      });
    }
  }

  return getFinalScore(oceanFloor);
};
