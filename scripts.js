/*jshint esversion: 6 */

let gameCounter = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let result;
let gamesWon = 0;

// Random number function for computer's pick

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Computer selects hand function

function computerSelect() {
  let a = getRandom(1, 3);
  if (a == 1) {
    a = `rock`;
  } else if (a == 2) {
    a = `paper`;
  } else if (a == 3) {
    a = `scissors`;
  }
  console.log(`Computer has selected ${a}!`);
  return a;
}

//Check hands against each other, change score and log results

function checkHands() {
  let whoWins;
  if (computerSelection === playerSelection) {
    whoWins = `draw`;
  } else if (playerSelection == `rock`) {
    if (computerSelection == `paper`) {
      whoWins = `computer`;
    } else if (computerSelection == `scissors`) {
      whoWins = `player`;
    }
  } else if (playerSelection == `paper`) {
    if (computerSelection == `rock`) {
      whoWins = `player`;
    } else if (computerSelection == `scissors`) {
      whoWins = `computer`;
    }
  } else if (playerSelection == `scissors`) {
    if (computerSelection == `rock`) {
      whoWins = `computer`;
    } else if (computerSelection == `paper`) {
      whoWins = `player`;
    }
  }

  if (whoWins === `player`) {
    playerScore++;
    result = `${playerSelection} beats ${computerSelection} - player wins!`;
  } else if (whoWins === `computer`) {
    computerScore++;
    result = `${computerSelection} beats ${playerSelection} - computer wins!`;
  } else if (whoWins === `draw`) {
    result = `It's a draw!`;
  }

  gameCounter++;
  console.log(result);
  console.log(`Current score is:`);
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
  gameCounter === 1
    ? console.log(`Total of ${gameCounter} round played so far.`)
    : console.log(`Total of ${gameCounter} rounds played so far.`);
  console.log(``);
}

//Round play function

function playRound() {
  playerSelection = prompt(`Rock Paper Scissors! What do you pick?`);
  if (playerSelection !== null) {
    playerSelection = playerSelection.toLowerCase();
    if (
      playerSelection === `rock` ||
      playerSelection === `paper` ||
      playerSelection === `scissors`
    ) {
      console.log(`You have selected ${playerSelection}!`);
      computerSelection = computerSelect();
      checkHands();
    } else {
      console.log(`Please select rock, paper or scissors.`);
      console.log(``);
      return;
    }
  } else {
    console.log(`Cancelled.`);
    console.log(``);
  }
}

//function to start game of multiple rounds

function game() {
  console.log("Resetting score.");
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; ++i) {
    playRound();
    if (playerSelection == null) {
      break;
    } else {
      console.log(`${i + 1} rounds of 5 played this game.`);
      console.log(``);
    }
  }
  if (computerScore === playerScore) {
    console.log(`The game was a draw!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins the game!`);
  } else if (playerScore > computerScore) {
    gamesWon++;
    console.log(`Player wins the game!`);
    if (gamesWon === 1) {
      console.log(`You've won ${gamesWon} game so far.`);
    } else {
      console.log(`You've won ${gamesWon} games so far.`);
    }
  }
  console.log(``);
  playerScore = 0;
  computerScore = 0;
}

//Buttons to initiate game(s)

const oneRoundButton = document.querySelector(".round");
oneRoundButton.addEventListener("click", playRound);

const fiveRoundButton = document.querySelector(".fiverounds");
fiveRoundButton.addEventListener("click", game);
