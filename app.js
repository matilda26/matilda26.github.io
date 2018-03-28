/*
html:
3 x 3 boxes, each with event trigger
alternates between users to place either x or o
if

1. establish which turn it is: odd is player 1, even is player two.
2. if player 1 picks div, that div number is pushed to player array.
-
ADD
choice theme at beginning
robbie p cheng git hub



*/
var gameBlock = document.querySelectorAll('.block');
var playerOneStatus = document.querySelector('.one-status');
var playerTwoStatus = document.querySelector('.two-status');
var playerOneScore = document.querySelector('.pOne-score');
var playerTwoScore = document.querySelector('.pTwo-score');
var resetBtn = document.querySelector('.reset');

var playerOne = [];
var playerTwo = [];
var turn = 0;
var tally = [0,0];

var checkTurn = function(event) {
  if (turn % 2 !== 0) {
    event.target.style.backgroundImage = 'url(images/cross.png)';
    playerOne.push(Number(event.target.id));
    turn++;
    checkWin(playerOne);
  } else {
    event.target.style.backgroundImage = 'url(images/circle.png)';
    playerTwo.push(Number(event.target.id));
    turn++;
    checkWin(playerTwo);
  }
}
var checkWin = function(player) {
  player.sort();
  if (player[0] === player[1] - 1 && player[1] === player[2] - 1) {
    //add animation
    if (turn % 2 !== 0) {
      playerOneStatus.textContent = 'PLAYER ONE WINS';
      tally[0] = tally[0] + 1;
      playerOneScore.textContent = tally[0];
    } else {
      playerTwoStatus.textContent = 'PLAYER TWO WINS';
      tally[1] = tally[1] + 1;
      playerTwoScore.textContent = tally[1];
    }
  } else if (player[0] === player[1] - 3 && player[1] === player[2] - 3) {
    if (turn % 2 !== 0) {
      playerOneStatus.textContent = 'PLAYER ONE WINS';
      tally[0] = tally[0]+1;
      playerOneScore.textContent = tally[0];
    } else {
      playerTwoStatus.textContent = 'PLAYER TWO WINS';
      tally[1] = tally[1] + 1;
      playerTwoScore.textContent = tally[1];
    }
  } else if (player[0] === player[1] - 2 && player[1] === player[2] - 2 || player[0] === player[1] - 4 && player[1] === player[2] - 4) {
    if (turn % 2 !== 0) {
      playerOneStatus.textContent = 'PLAYER ONE WINS';
      tally[0] = tally[0] + 1;
      playerOneScore.textContent = tally[0];
    } else {
      playerTwoStatus.textContent = 'PLAYER TWO WINS';
      tally[1] = tally[1] + 1;
      playerTwoScore.textContent = tally[1];
    }
  }
}

var resetGame = function () {
  playerOne = [];
  playerTwo = [];
  turn = 0;
  gameBlock.forEach(function(block) {
    block.style.backgroundImage = 'url(images/empty.png)';
  })
  playerOneStatus.textContent = '';
  playerTwoStatus.textContent = '';
}





gameBlock.forEach(function(block) {
  block.addEventListener('click', checkTurn);
})
resetBtn.addEventListener('click', resetGame);



//
// var played = [];
// var board = function() {
//   for (var i = 0; i < 9; i++) {
//     if array[i]
//   }
// }
