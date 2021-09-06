//create an array to hold the random selections of the computer

const options = ["rock", "paper", "scissors"];

//grab the various section and buttons to each section from HTML
const pagesBtns = document.querySelectorAll("[data-target]");
const pages = document.querySelectorAll(".pages");

//grab various HTML elements that make up game funtionality
const playBtns = document.querySelector(".play-buttons");
const playerPick = document.querySelector("#player-selection");
const computerPick = document.querySelector("#computer-selection");

const roundWinner = document.querySelector(".round-winner");
const playerRunningScore = document.querySelector("#player-running-score");
const computerRunningScore = document.querySelector("#computer-running-score");
const displayGameWinner = document.querySelector(".display-game-winner");
const gameWinner = document.querySelector(".game-winner");
const replayGameBtn = document.querySelector(".play-again-btn");

//grab game audios

//create variables to hold total scores
let playerScore = 0;
let computerScore = 0;
let playOutcome;
let playerTotalScore = 0;
let computerTotalScore = 0;

//link the various game sections
pagesBtns.forEach((pageBtn) => {
  pageBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("tab")) {
      const activePage = document.querySelector(e.target.dataset.target);
      pages.forEach((page) => {
        if (page === activePage) {
          page.style.display = "flex";
        } else {
          page.style.display = "none";
        }
      });
    }
  });
});

//add event listener to play buttons
playBtns.addEventListener("click", (e) => {
  const target = e.target.closest("button");
  switch (target.id) {
    case "rock":
      playerPlay = target.textContent.toLowerCase().trim();
      playRound(playerPlay, computerPlay());
      break;
    case "paper":
      playerPlay = target.textContent.toLowerCase().trim();
      playRound(playerPlay, computerPlay());
      break;
    case "scissors":
      playerPlay = target.textContent.toLowerCase().trim();
      playRound(playerPlay, computerPlay());
      break;
  }
});

//create a function that randomly generates the computer's selection

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomOption = options[randomNumber];
  return randomOption;
}

//create a function that determines the winner of each game round depending on player selection and computer selection

function playRound(playerSelection, computerSelection) {
  playerPick.textContent = `${playerSelection}`;
  computerPick.textContent = `${computerSelection}`;

  for (let i = 0; i < options.length; i++) {
    if (playerSelection === computerSelection) {
      //check if player selection is the same as computer selection
      playOutcome = "Tie! play again";
      playerScore = 0;
      computerScore = 0;
      displayRoundWinner(playOutcome);
      tieEffects();
      break;
    } else if (
      //check if the player wins if player selection is rock
      playerSelection === options[0] &&
      computerSelection === options[2]
    ) {
      playOutcome = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundWinner(playOutcome);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      winEffects();
      break;
    } else if (
      //check if the player wins if player selection is paper
      playerSelection === options[1] &&
      computerSelection === options[0]
    ) {
      playOutcome = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundWinner(playOutcome);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      winEffects();

      break;
    } else if (
      //check if the player wins if player selection is scissors
      playerSelection === options[2] &&
      computerSelection === options[1]
    ) {
      playOutcome = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundWinner(playOutcome);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      winEffects();

      break;
    } else {
      //check if computer wins
      playOutcome = `You loss! ${computerSelection} beats ${playerSelection} `;
      playerScore = 0;
      computerScore = 1;
      displayRoundWinner(playOutcome);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      loseEffects();

      break;
    }
  }

  runningScore(playerTotalScore, computerTotalScore);
  alertGameWinner(playerTotalScore, computerTotalScore);

  popWinner(playerTotalScore, computerTotalScore);
}

// create a function that determines the number of game rounds and alert the winner to the browser window

// create a function that update and output game scoress
function runningScore(runningScore1, runningScore2) {
  playerRunningScore.textContent = `${runningScore1}`;
  computerRunningScore.textContent = `${runningScore2}`;
}

//create function that displays outcome for each round
function displayRoundWinner(roundOutcome, plyerRoundScore, computerRoundScore) {
  if (plyerRoundScore === computerRoundScore) {
    roundWinner.firstElementChild.textContent = roundOutcome;
  } else if (plyerRoundScore > computerRoundScore) {
    roundWinner.firstElementChild.textContent = roundOutcome;
  } else {
    roundWinner.firstElementChild.textContent = roundOutcome;
  }
}

//create a function that alert winner of the game based on total scores
function alertGameWinner(totalScore1, totalScore2) {
  const finalScore = document.querySelector(".scores");
  const displayFinalOutcome = document.querySelector(".display-game-status");
  const winGame = document.querySelector(".win-game");
  const GameOverSound = document.querySelector(".game-over-sound");

  finalScore.textContent = `Player ${playerTotalScore} : ${computerTotalScore} Computer`;

  if (totalScore1 === 5 && totalScore1 > totalScore2) {
    displayFinalOutcome.textContent = "WINNER!!!";
    displayFinalOutcome.classList.add("game-status-win");
    finalScore.previousElementSibling.classList.add("game-status-win");
    gameWinner.textContent = "Congratulations!!! You won the game";
    winGame.play();
  } else if (totalScore2 === 5 && totalScore1 < totalScore2) {
    displayFinalOutcome.textContent = "GAME OVER";
    displayFinalOutcome.classList.add("game-status-lose");
    gameWinner.textContent = "Oops! You loss the game";

    GameOverSound.play();
  }
}

function popWinner(totalScore1, totalScore2) {
  if (totalScore1 === 5 || totalScore2 === 5) {
    setTimeout(() => displayGameWinner.classList.add("active"), 500);
  }
}

function winEffects() {
  const playerAvatar = document.querySelector(".selection-container .fa-user");
  const playerWinIndicator = document.querySelector(".user");
  const playerSelection = document.querySelector(
    ".selection-container #player-selection"
  );
  const winRound = document.querySelector(".win-round");

  playerAvatar.style.cssText = "color:#9acd32; transform:scale(1.1);";
  playerSelection.style.cssText = "color:#9acd32; transform:scale(1.1);";
  playerRunningScore.style.cssText = "color:#9acd32;";
  playerWinIndicator.classList.add("win-effect");

  setTimeout(() => {
    playerAvatar.style.cssText = "color:#a7aabe; transform:scale(1);";
    playerSelection.style.cssText = "color:#a7aabe; transform:scale(1);";
    playerRunningScore.style.cssText = "color:#a7aabe;";
    playerWinIndicator.classList.remove("win-effect");
  }, 500);
  winRound.currentTime = 0;
  winRound.play();
}

function loseEffects() {
  const computerWinIndicator = document.querySelector(".robot");
  const computerAvatar = document.querySelector(
    ".selection-container .fa-robot"
  );
  const computerSelection = document.querySelector(
    ".selection-container #computer-selection"
  );
  const lossRound = document.querySelector(".lose-round");

  computerAvatar.style.cssText = "color:#f54747; transform:scale(1.1)";
  computerSelection.style.cssText = "color:#f54747; transform:scale(1.1)";
  computerRunningScore.style.cssText = "color:#f54747;";
  computerWinIndicator.classList.add("win-effect");
  setTimeout(() => {
    computerAvatar.style.cssText = "color:#a7aabe; transform:scale(1)";
    computerAvatar.style.cssText = "color:#a7aabe";
    computerSelection.style.cssText = "color:#a7aabe; transform:scale(1)";
    computerRunningScore.style.cssText = "color:#a7aabe;";
    computerWinIndicator.classList.remove("win-effect");
  }, 500);
  lossRound.currentTime = 0;
  lossRound.play();
}

function tieEffects() {
  const tieRound = document.querySelector(".tie-round");
  tieRound.currentTime = 0;
  tieRound.play();
}

replayGameBtn.addEventListener("click", playAgain);

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  playOutcome;
  playerTotalScore = 0;
  computerTotalScore = 0;
  playerPick.textContent = "...";
  computerPick.textContent = "...";
  roundWinner.firstElementChild.textContent = "who will win this round";
  playerRunningScore.textContent = `0`;
  computerRunningScore.textContent = `0`;
  gameRound = 1;
  displayGameWinner.classList.remove("active");
}
