export const giantSquidPartOne = (input) => {
  const [bingoNumbers, ...boards] = input;
  const nums = bingoNumbers.split(',');
  let boardData = formatBoardData(boards);
  for (const number of nums) {
    boardData = markNumbers(boardData, number);
    const winningBoard = boardData.filter(isWinningBoard).flat();

    if (winningBoard.length) {
      return getScoreOfWinningBoard(winningBoard) * Number(number);
    }
  }
};

export const formatBoardData = (boards) =>
  boards.map((b) =>
    b.split('\n').reduce((arr, x) => {
      return [
        ...arr,
        x
          .split(' ')
          .filter(Boolean)
          .map((number) => ({ number, marked: false })),
      ];
    }, [])
  );

export const markNumbers = (boardData, num) =>
  boardData.map((boards) =>
    boards.map((board) =>
      board.map((row) => ({
        ...row,
        marked: row.marked || row.number === num,
      }))
    )
  );

export const isWinningBoard = (board) => {
  const rowWin = board.some((row) => row.every((r) => r.marked));
  const columnWin = board[0]
    .map((_, i) => board.map((row) => row[i]))
    .some((col) => col.every((c) => c.marked));

  if (columnWin || rowWin) {
    return true;
  }
  return false;
};

export const getScoreOfWinningBoard = (board) =>
  board.reduce((sum, row) => {
    return (sum += row.reduce((rowSum, x) => {
      if (!x.marked) {
        rowSum += Number(x.number);
      }
      return rowSum;
    }, 0));
  }, 0);
