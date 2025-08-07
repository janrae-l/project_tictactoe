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

  const dropToken = (row, column, player) => {
    //I need to fix the logic here
    // for (let i=0;i < rows; i++) {
    //   if (i === row) {

    //   }
    // }
    if (board[row][column] === "X" || board[row][column] === "O") {
      console.log("This cell is occupied");
    } else {
      board[row][column].addToken(player);
    }
  };

  const printBoard = () => {
    const testBoard = board.map((row) => row.map((cell) => cell.getValue()));
    console.log(testBoard);
  };

  //Access each value of the board and then push it into another array where you can check the length for the loop,
  //or ask user if they still want to play the game?? but it defeats the purpose of the game to be played

  const patternArr = () => {
    let pattern = [];

    ///it needs to get inside the testboard to get the array for the pattern
    // for (let i = 0; i < testboard.length; i++) {
    //   console.log(i, i.length);
    //   for (let j = 0; j < i.length; j++) {
    //     pattern.push(j.getValue());
    //   }
    // }

    console.log(pattern);
    return pattern;
  };

  return { getBoard, dropToken, printBoard, patternArr };
}

function Cell() {
  let value = 3;

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
      token: "X",
    },
    {
      name: playerTwo,
      token: "O",
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

  const winningPattern = (board) => {};

  const playRound = (row, column) => {
    console.log(
      `Dropping ${
        getActivePlayer().name
      }'s token into row ${row}, column ${column}`
    );

    board.dropToken(row, column, getActivePlayer().token);

    board.patternArr();
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

const consoleTest = (function () {
  const game = GameController();
  const row = Number(prompt("What row are you going to pick? (0, 1, 2)"));
  const column = Number(prompt("What column are you going to pick? (0, 1, 2)"));
  game.getActivePlayer();
  game.playRound(row, column);
})();
