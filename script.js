
//declare variables
let player1;
let player2;
let winner;
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

//declare function to print the board
function printBoard(){
  let boardString = '';
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      boardString += board[i][j] ? board[i][j] : '_';
      boardString += ' ';
    }
    boardString += '\n';
  }
  console.log(boardString);
}

//declare function to check for a winner
function checkWinner(){
  //check rows
  for(let i = 0; i < board.length; i++){
    if(board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== null){
      winner = board[i][0];
      return true;
    }
  }
  //check columns
  for(let i = 0; i < board.length; i++){
    if(board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== null){
      winner = board[0][i];
      return true;
    }
  }
  //check diagonals
  if(board[1][1] === board[0][2] && board[1][1] === board[2][0] && board[1][1] !== null){
    winner = board[1][1];
    return true;
  } else if(board[1][1] === board[0][0] && board[1][1] === board[2][2] && board[1][1] !== null){
    winner = board[1][1];
    return true;
  }
  //check for a tie
  let tie = true;
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j] === null) tie = false;
    }
  }
  if(tie) return true;
  return false;
}

//declare function to play a turn
function playTurn(player, position){
  let row = position[0];
  let column = position[1];
  board[row][column] = player;
  printBoard();
}

//start the game
player1 = 'X';
player2 = 'O';

//prompt the players for their moves
let input1 = prompt(`Player 1 (${player1}) enter your move:`);
// let position1 = [input1[0], input1[2]];
playTurn(player1, position1);

let input2 = prompt(`Player 2 (${player2}) enter your move:`);
let position2 = [input2[0], input2[2]];
playTurn(player2, position2);

//Check for a winner
if(checkWinner()){
  console.log(`Player ${winner} wins!`);
} else {
  console.log('The game is a tie!');
}