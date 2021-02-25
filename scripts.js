let gameCounter = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let winner;
let resultMessage;

const output = document.querySelector("#output");
const counterOutput = document.querySelector("#counterOutput");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const pScoreOutput = document.querySelector("#playerScore");
const cScoreOutput = document.querySelector("#computerScore");

function computerSelect() {
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let randomNumber = getRandom(1, 3);
  switch (randomNumber) {
    case 1:
      computerSelection = `rock`;
      break;
    case 2:
      computerSelection = `paper`;
      break;
    case 3:
      computerSelection = `scissors`;
      break;
  }
}

function checkHands() {
  if (computerSelection === playerSelection) {
    winner = `draw`;
  } else if (
    (playerSelection === `rock` && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winner = "player";
  } else {
    winner = "computer";
  }
}

function playRound(selection) {
  gameCounter++;
  playerSelection = selection;
  computerSelect();
  checkHands();
  if (winner === "draw") {
    resultAnnounce = `No points given!`;
  } else {
    resultAnnounce = `One point to ${winner}`;
  }
  if (winner === "player") {
    playerScore++;
    resultMessage = "Well done you!";
  } else if (winner === "computer") {
    computerScore++;
    resultMessage = `Better luck next time!`;
  }

  if (playerScore === 5 || computerScore === 5) {
    resultAnnounce = `${winner} wins the game! ${resultMessage}`;
    playerScore = 0;
    computerScore = 0;
    gameCounter = 0;
  }
  output.textContent = `Player selected ${playerSelection}, Computer selected ${computerSelection}!`;
  resultOutput.textContent = resultAnnounce;

  gameCounter === 1
    ? (counterOutput.textContent = `${gameCounter} round played`)
    : (counterOutput.textContent = `${gameCounter} rounds played`);

  pScoreOutput.textContent = `Player: ${playerScore}`;
  cScoreOutput.textContent = `Computer: ${computerScore}`;
}

rockButton.addEventListener("click", function () {
  playRound("rock");
});
paperButton.addEventListener("click", function () {
  playRound("paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});

// setTimeout(function() { computerSelect();
//  }, 3000);
