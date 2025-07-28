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

  const dropToken = (board = board, row, column, player) => {
    if (!board[row][column]) {
      board[row][column].addToken(player);
    } else {
      console.log("This cell is occupied");
    }
  };

  const printBoard = () => {
    const testBoard = board.map((row) => row.map((cell) => cell.getValue()));
    console.log(testBoard);
  };

  return { getBoard, dropToken, printBoard };
}

function Cell() {
  let value = " ";

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

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
    getBoard: board.getBoard,
  };
}

function consoleTest() {
  const game = GameController();
  const row = Number(prompt("What row are you going to pick? (0, 1, 2)"));
  const column = Number(prompt("What column are you going to pick? (0, 1, 2)"));
  game.getActivePlayer();
  game.playRound(row, column);
}

consoleTest();
