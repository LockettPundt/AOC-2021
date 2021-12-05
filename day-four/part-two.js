import {
  getScoreOfWinningBoard,
  markNumbers,
  isWinningBoard,
  formatBoardData,
} from './part-one';

export const giantSquidPartTwo = (input) => {
  const [bingoNumbers, ...boards] = input;
  const nums = bingoNumbers.split(',');
  let boardData = formatBoardData(boards);
  for (const number of nums) {
    if (boardData.length === 1) {
      boardData = markNumbers(boardData, number);
      return getScoreOfWinningBoard(boardData[0]) * Number(number);
    }
    boardData = markNumbers(boardData, number).filter(
      (board) => !isWinningBoard(board)
    );
  }
};
