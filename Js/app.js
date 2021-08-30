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
// create game round counter variable
let gameRound = 1;

//create a function that randomly generates the computer's selection

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomOption = options[randomNumber];
  return randomOption;
}

//create a function that determines the winner of each game round depending on player selection and computer selection

function playRound(playerSelection, computerSelection) {
  gameHeader(gameRound);
  const playerSelectionlowerCase = playerSelection.toLowerCase();
  console.log(`Player's selection: ${playerSelectionlowerCase}`);
  console.log(`Computer's selection: ${computerSelection}`);

  for (let i = 0; i < options.length; i++) {
    if (playerSelectionlowerCase === computerSelection) {
      //check if player selection is the same as computer selection
      playOutcome = "Tie! play again";
      playerScore = 1;
      computerScore = 0;
      displayRoundOutcome(playOutcome, playerScore, computerScore);
      break;
    } else if (
      //check if the player wins if player selection is rock
      playerSelectionlowerCase === options[0] &&
      computerSelection === options[2]
    ) {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundOutcome(playOutcome, playerScore, computerScore);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      break;
    } else if (
      //check if the player wins if player selection is paper
      playerSelectionlowerCase === options[1] &&
      computerSelection === options[0]
    ) {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundOutcome(playOutcome, playerScore, computerScore);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      break;
    } else if (
      //check if the player wins if player selection is scissors
      playerSelectionlowerCase === options[2] &&
      computerSelection === options[1]
    ) {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      playerScore = 1;
      computerScore = 0;
      displayRoundOutcome(playOutcome, playerScore, computerScore);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      break;
    } else {
      //check if computer wins
      playOutcome = `You loss! ${computerSelection} win ${playerSelection} `;
      playerScore = 0;
      computerScore = 1;
      displayRoundOutcome(playOutcome, playerScore, computerScore);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
      break;
    }
  }

  gameRound++;

  console.log(`Player Total score: ${playerTotalScore}`);
  console.log(`Computer Total score: ${computerTotalScore}`);
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
