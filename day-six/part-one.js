export const lanternfishPartOne = (input) => {
  let numberOfLanternfish = input.map(Number);

  for (let i = 0; i < 80; i++) {
    const { updatedLanternFish, numberOfFishToAdd } =
      numberOfLanternfish.reduce(
        (result, x) => {
          if (x === 0) {
            return {
              updatedLanternFish: [...result.updatedLanternFish, 6],
              numberOfFishToAdd: (result.numberOfFishToAdd += 1),
            };
          }
          return {
            ...result,
            updatedLanternFish: [...result.updatedLanternFish, x - 1],
          };
        },
        {
          updatedLanternFish: [],
          numberOfFishToAdd: 0,
        }
      );
    numberOfLanternfish = [
      ...updatedLanternFish,
      ...Array.from({ length: numberOfFishToAdd }).map(() => 8),
    ];
  }
  return numberOfLanternfish.length;
};
