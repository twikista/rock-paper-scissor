//create an array to hold the random selections of the computer

const options = ["rock", "paper", "scissors"];

//grab the various section and buttons to each section from HTML
const pagesBtns = document.querySelectorAll("[data-target]");
const pages = document.querySelectorAll(".pages");

//grab the play game buttons from HTML
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

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
const winGame = document.querySelector(".win-game");
const winRound = document.querySelector(".win-round");
const GameOverSound = document.querySelector(".game-over-sound");
const lossRoundTwo = document.querySelector(".lose-round");
const tieRound = document.querySelector(".tie-round");

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

      console.log(activePage);
    }
  });
});

//add event listener to the play game buttons
rockBtn.addEventListener("click", (e) => {
  let playerPlay = "rock";
  playRound(playerPlay, computerPlay());
});

paperBtn.addEventListener("click", (e) => {
  let playerPlay = "paper";
  playRound(playerPlay, computerPlay());
});

scissorsBtn.addEventListener("click", (e) => {
  let playerPlay = "scissors";
  playRound(playerPlay, computerPlay());
});

//create a function that randomly generates the computer's selection

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomOption = options[randomNumber];
  return randomOption;
}

//create a function that determines the winner of each game round depending on player selection and computer selection

function playRound(playerSelection, computerSelection) {
  const playerSelectionlowerCase = playerSelection.toLowerCase();
  playerPick.textContent = `${playerSelection}`;
  computerPick.textContent = `${computerSelection}`;

  for (let i = 0; i < options.length; i++) {
    if (playerSelection === computerSelection) {
      //check if player selection is the same as computer selection
      playOutcome = "Tie! play again";
      playerScore = 0;
      computerScore = 0;
      displayRoundWinner(playOutcome);
      gameRound--;
      tieRound.currentTime = 0;
      tieRound.play();
      break;
    } else if (
      //check if the player wins if player selection is rock
      playerSelection === options[0] &&
      computerSelection === options[2]
    ) {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
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
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
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
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundWinner(playOutcome);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      winEffects();

      break;
    } else {
      //check if computer wins
      playOutcome = `You loss! ${computerSelection} win ${playerSelection} `;
      playerScore = 0;
      computerScore = 1;
      displayRoundWinner(playOutcome);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      loseEffects();

      break;
    }
  }

  gameRound++;

  totalScore(playerTotalScore, computerTotalScore);
  alertGameWinner(playerTotalScore, computerTotalScore);

  popWinner(playerTotalScore, computerTotalScore);
}

// create a function that determines the number of game rounds and alert the winner to the browser window

// create a function that prompt user for input
function playerPlay() {
  let userResponse = prompt("Make a selection", "");
  //validate user input
  if (userResponse === "") {
    alert("please enter a valid option");
  } else {
    return userResponse;
  }
}

//create function that displays outcome for each round
function displayRoundOutcome(roundOutcome, roundScore1, roundScore2) {
  if (roundScore1 === roundScore2) {
    console.log(roundOutcome);
    console.log(`playerScore: ${roundScore1}`);
    console.log(`computerScore: ${roundScore2}`);
  } else if (roundScore1 > roundScore2) {
    console.log(roundOutcome);
    console.log(`player score: ${roundScore1}`);
    console.log(`computer score: ${roundScore2}`);
  } else {
    console.log(roundOutcome);
    console.log(`player score: ${roundScore1}`);
    console.log(`computer score: ${roundScore2}`);
  }
}

//create a function that alert winner of the game based on total scores
function alertGameWinner(totalScore1, totalScore2) {
  if (totalScore1 > totalScore2) {
    alert("Congratulations!!! You won the game");
  } else if (totalScore1 < totalScore2) {
    alert("Oops! You loss the game");
  } else {
    alert("It's a Tie: No winner!");
  }
}
