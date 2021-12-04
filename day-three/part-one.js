export const binaryDiagnosticPartOne = (input) => {
  const { gamma, episolon } = getGammaAndEpsilonValues(input)
  return parseInt(gamma, 2) * parseInt(episolon, 2)
}

export const getGammaAndEpsilonValues = (input) => 
  input[0].split('').reduce((obj, _, i) => {
    const sumOfOnes = input.reduce((sum, row) => sum += Number(row.split('')[i]),0)
    if (sumOfOnes > input.length / 2) {
      obj.gamma += '1'
      obj.episolon += '0'
    } else {
      obj.gamma += '0'
      obj.episolon += '1'
    }
    return obj
  }, {
    gamma: '',
    episolon: '',
  })