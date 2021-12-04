
export const lifeSupportRating = (input) => {
  const oxygenRating = getOxygenAndCo2Rating(input, true)
  const getCo2Rating = getOxygenAndCo2Rating(input, false)
  return parseInt(oxygenRating, 2) * parseInt(getCo2Rating, 2)
}

export const getOxygenAndCo2Rating = (
  input,
  getOxygenRating,
  ) => {
    let filteredInput = input
    for (let index = 0; index < input[0].length; index++) {
      if (filteredInput.length === 1) break
      const ones = filteredInput.filter(x => x.split('')[index] === '1')
      const zeroes = filteredInput.filter(x => x.split('')[index] === '0')

      filteredInput = filteredInput.filter(x => {
        const num = x.split('')[index]
        if (ones.length === zeroes.length) {
          if (getOxygenRating) return num === '1'
          return num === '0'
        }
        if (ones.length > zeroes.length) {
          if (getOxygenRating) {
            return num === '1'
          } else {
            return num === '0'
          }
        }
        if (zeroes.length > ones.length) {
          if (getOxygenRating) {
            return num === '0'
          } else {
            return num === '1'
          }
        }
      })
    }
    return filteredInput
}