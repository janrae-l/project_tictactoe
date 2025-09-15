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
      return true;

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
      // console.log(board[i]);
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
      scoreArr: [],
    },
    {
      name: playerTwo,
      token: "O",
      scoreArr: [],
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

  const activatePattern = (toPrint) => {
    let active = true;
    while (active) {
      console.log(toPrint);
      active = false;
    }
  };

  const playerScore = () => {
    getActivePlayer().scoreArr.push(pattern);
    console.log(
      `${getActivePlayer().name} has ${getActivePlayer().scoreArr.length} ${
        getActivePlayer().scoreArr.length > 1 ? "scores" : "score"
      }`
    );
  };

  const winningPattern = (board) => {
    //the console.log needs to be changed into appending of scores
    //in the corresponding object of the player
    for (let i = 0; i < board.length; i++) {
      if (i === 0 && (board[i] === "X" || board[i] === "O")) {
        if (board[i] === board[1] && board[1] === board[2]) {
          //but how will this verify if the score added is not repetitive?
          //the score is now repetitive. How to fix this?
          if (board[i] === getActivePlayer().token) {
            let pattern = "012";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();
              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );
            }
          }
          // playerScore();

          //console.log(`${getActivePlayer().name}'s scores`);
        } else if (board[i] === board[4] && board[4] === board[8]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "048";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        } else if (board[i] === board[3] && board[3] === board[6]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "036";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        }
      } else if (i === 1 && (board[i] === "X" || board[i] === "O")) {
        if (board[1] === board[4] && board[4] === board[7]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "147";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        }
      } else if (i === 2 && (board[i] === "X" || board[i] === "O")) {
        if (board[2] === board[5] && board[5] === board[8]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "258";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        } else if (board[2] === board[4] && board[4] === board[6]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "246";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        }
      } else if (i === 3 && (board[i] === "X" || board[i] === "O")) {
        if (board[3] === board[4] && board[4] === board[5]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "345";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        }
      } else if (i === 6 && (board[i] === "X" || board[i] === "O")) {
        if (board[6] === board[7] && board[7] === board[8]) {
          // playerScore();
          if (board[i] === getActivePlayer().token) {
            let pattern = "678";
            if (!getActivePlayer().scoreArr.includes(pattern)) {
              // playerScore();

              getActivePlayer().scoreArr.push(pattern);
              console.log(
                `${getActivePlayer().name} has ${
                  getActivePlayer().scoreArr.length
                } ${getActivePlayer().scoreArr.length > 1 ? "scores" : "score"}`
              );

              // getActivePlayer().score++;
              // console.log(
              //   `${getActivePlayer().name} has ${getActivePlayer().score} ${
              //     getActivePlayer().score > 1 ? "scores" : "score"
              //   }`
              // );
            }
            //console.log(`${getActivePlayer().name}'s scores`);
          }
        }
      }
    }
  };
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

  const getPlayerRowCol = () => {
    let row = Number(prompt("What row are you going to pick? (0, 1, 2)"));
    let column = Number(prompt("What column are you going to pick? (0, 1, 2)"));
    while (board.dropToken(row, column, getActivePlayer()) === true) {
      alert("The cell you chose is occupied! Pick another column/row again");
      row = Number(prompt("What row are you going to pick? (0, 1, 2)"));
      column = Number(prompt("What column are you going to pick? (0, 1, 2)"));
    }

    return { row, column };
  };

  const playRound = (row, column) => {
    console.log(
      `Dropping ${
        getActivePlayer().name
      }'s token into row ${row}, column ${column}`
    );

    if (board.dropToken(row, column, getActivePlayer().token) === true) {
      console.log(board.dropToken(row, column, getActivePlayer().token));
    }

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
  let counter = 0;

  const gameLoop = () => {
    let play_game = true;
    while (play_game && counter < 9) {
      const { row, column } = getPlayerRowCol();

      getActivePlayer();
      playRound(row, column);
      console.log(board.patternArr());
      winningPattern(board.patternArr());

      switchPlayer();
      printNewRound();
      counter++;
      let response = prompt("Do you want to continue playing? yes/no");
      if (response.toLowerCase() === "no" || counter === 9) {
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
