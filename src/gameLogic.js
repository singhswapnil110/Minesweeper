function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const generateBoard = (boardHeight, boardWidth, mineCount) => {
  var board = [];
  for (var i = 0; i < boardHeight; i++) {
    board[i] = [];
    for (var j = 0; j < boardWidth; j++) {
      board[i][j] = {
        x: i,
        y: j,
        isFlagged: false,
        isMine: false,
        isRevealed: false,
        value: 0
      };
    }
  }

  for (let i = 0; i < mineCount; ) {
    const randomX = getRandomInt(boardWidth);
    const randomY = getRandomInt(boardHeight);
    if (!board[randomY][randomX].isMine) {
      i++;
      board[randomY][randomX].isMine = true;
    }
  }

  for (let i = 0; i < boardHeight; i++)
    for (let j = 0; j < boardWidth; j++) {
      const neighborArray = [
        [i - 1, j - 1],
        [i, j - 1],
        [i + 1, j - 1],
        [i - 1, j],
        [i + 1, j],
        [i - 1, j + 1],
        [i, j + 1],
        [i + 1, j + 1]
      ];
      //console.log(neighborArray);
      neighborArray.forEach(([x, y]) => {
        if (x > -1 && y > -1 && x < boardHeight && y < boardWidth) {
          if (board[x][y].isMine) board[i][j].value++;
        }
      });
    }
  return board;
};

