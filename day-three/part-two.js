
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
      const { ones, zeroes } = filteredInput.reduce((result, x) => {
        const num = x.split('')[index]
        if (num === '1') {
          result.ones += 1
        } else {
          result.zeroes += 1
        }
        return result
      }, {
        ones: 0,
        zeroes: 0,
      })

      filteredInput = filteredInput.filter(x => {
        const num = x.split('')[index]
        if (ones === zeroes) {
          if (getOxygenRating) return num === '1'
          return num === '0'
        }
        if (ones > zeroes) {
          if (getOxygenRating) {
            return num === '1'
          } else {
            return num === '0'
          }
        }
        if (zeroes > ones) {
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