function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }
  const getBoard = () => board;

  const printBoard = () => {
    const testBoard = board.map((row) => row.map((cell) => cell.getValue()));
    console.log(testBoard);
  };

  return { getBoard, printBoard };
}

function Cell() {
  let value = 1;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

const game = Gameboard();
game.getBoard();
game.printBoard();

function GameController(playerOne = "Player One", playerTwo = "Player Two") {
  const board = Gameboard();

  const players = [
    {
      name: playerOne,
      token: 1,
    },
    {
      name: playerTwo,
      token: 2,
    },
  ];

  let activePlayer = players[0];

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn`);
  };

  const playRound = (row, column) => {
    console.log(
      `Dropping ${
        getActivePlayer().name
      }'s token into row ${row}, column ${column}`
    );
    board.dropToken(row, column, getActivePlayer().token);

    switchPlayer();
    printNewRound();
  };

  printNewRound();

  return {
    playRound,
    getActivePlayer,
  };
}
