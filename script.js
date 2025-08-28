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
    if (
      board[row][column].getValue() === "X" ||
      board[row][column].getValue() === "O"
    ) {
      console.log("This cell is occupied");
      //this works but it needs to ask for the row and column again then check if it is empty
      return;
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
    for (let i = 0; i < board.length; i++) {
      console.log(board[i]);
      for (let j = 0; j < board[i].length; j++) {
        pattern.push(board[i][j].getValue());
      }
    }

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

  const counterFunc = (arr) => {
    let counter = 0;
    let tokenCounter = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 3) {
        counter++;
      } else {
        tokenCounter++;
      }
    }
    console.log(counter, tokenCounter);
    return { counter, tokenCounter };
  };

  //this needs to be thought out more because it is an infinite loop now
  // let verdict = counter > tokenCounter ? true : false;

  // gameLoop(verdict);

  // consoleTest();

  const playRound = (row, column) => {
    console.log(
      `Dropping ${
        getActivePlayer().name
      }'s token into row ${row}, column ${column}`
    );

    board.dropToken(row, column, getActivePlayer().token);

    // board.patternArr();

    // switchPlayer();
    // printNewRound();

    // return { counter, tokenCounter };
  };
  // const { counter, tokenCounter } = counterFunc(board.patternArr());
  // console.log(counter, tokenCounter);

  // const verdict = () => {
  //   return prompt("Do you want to play?") ? "Y" === true : "N" === false;
  // };
  // let counter = 0;

  const gameLoop = () => {
    let play_game = true;
    while (play_game) {
      const row = Number(prompt("What row are you going to pick? (0, 1, 2)"));
      const column = Number(
        prompt("What column are you going to pick? (0, 1, 2)")
      );
      getActivePlayer();
      playRound(row, column);
      console.log(board.patternArr());

      switchPlayer();
      printNewRound();
      // counter++;
      let response = prompt("Do you want to continue playing? yes/no");
      if (response.toLowerCase() === "no") {
        play_game = false;
      }
    }
  };
  printNewRound();
  gameLoop();

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard,
  };
}

GameController();

// const consoleTest = () => {
//   const gameLoop = (counter) => {
//     let { counter, tokenCounter } = counterFunc(board.patternArr());
//     let verdict = counter > tokenCounter ? true : false;

//     gameLoop(verdict);
//     while (counter) {
//       const row = Number(prompt("What row are you going to pick? (0, 1, 2)"));
//       const column = Number(
//         prompt("What column are you going to pick? (0, 1, 2)")
//       );
//       getActivePlayer();
//       playRound(row, column);

//       // switchPlayer();
//       // printNewRound();
//       counter;
//       console.log(counter);
//       if (counter === 0) {
//         verdict = false;
//       }
//     }
//   };
// };
