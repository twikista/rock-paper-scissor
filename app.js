//create an array to hold the random selections of the computer

const options = ["rock", "paper", "scissors"];

//create variables to hold total scores
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
  let playOutcome;
  playerScore = 0;
  computerScore = 0;
  const playerSelectionlowerCase = playerSelection.toLowerCase();
  const tie = playerSelectionlowerCase === computerSelection;
  console.log(`Player's selection: ${playerSelectionlowerCase}`);
  console.log(`Computer's selection: ${computerSelection}`);

  //check if player selection is the same as computer's selection
  if (tie) {
    playOutcome = "Tie! play again";
    console.log(playOutcome);
    console.log("playerScore: 0");
    console.log("computerScore: 0");
  }
  //check if the player or computer wins if player selection is rock
  else if (playerSelectionlowerCase === "rock") {
    if (computerSelection === "scissors") {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      console.log(playOutcome);
      playerScore = 1;
      computerScore = 0;
      console.log(`player score: ${playerScore}`);
      console.log(`computer score: ${computerScore}`);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
    } else {
      playOutcome = `You lose! ${computerSelection} win ${playerSelection} `;
      console.log(playOutcome);
      playerScore = 0;
      computerScore = 1;
      console.log(`player score: ${playerScore}`);
      console.log(`computer score: ${computerScore}`);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
    }
    //check if the player or computer wins if player selection is paper
  } else if (playerSelectionlowerCase === "paper") {
    if (computerSelection === "rock") {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      console.log(playOutcome);
      playerScore = 1;
      computerScore = 0;
      console.log(`player score: ${playerScore}`);
      console.log(`computer score: ${computerScore}`);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
    } else {
      playOutcome = `You lose! ${computerSelection} win ${playerSelection} `;
      console.log(playOutcome);
      playerScore = 0;
      computerScore = 1;
      console.log(`player score: ${playerScore}`);
      console.log(`computer score: ${computerScore}`);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
    }
    //check if the player or computer wins if player selection is scissors
  } else if (playerSelectionlowerCase === "scissors") {
    if (computerSelection === "paper") {
      playOutcome = `You win! ${playerSelection} wins ${computerSelection}`;
      console.log(playOutcome);
      playerScore = 1;
      computerScore = 0;
      console.log(`player score: ${playerScore}`);
      console.log(`computer score: ${computerScore}`);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
    } else {
      playOutcome = `You lose! ${computerSelection} win ${playerSelection} `;
      console.log(playOutcome);
      playerScore = 0;
      computerScore = 1;
      console.log(`player score: ${playerScore}`);
      console.log(`computer score: ${computerScore}`);
      playerTotalScore += playerScore;
      computerTotalScore += computerScore;
    }
  }

  gameRound++;

  console.log(`Player Total score: ${playerTotalScore}`);
  console.log(`Computer Total score: ${computerTotalScore}`);
}

// create a function that determines the number of game rounds and alert the winner to the browser window

function game() {
  //loop through each round of the game
  let i = 1;
  while (i <= 5) {
    playRound(playerPlay(), computerPlay());
    i++;
  }
  //alert winner of the game based on total scores
  if (playerTotalScore > computerTotalScore) {
    alert("Congratulations!!! You won the game");
  } else if (playerTotalScore < computerTotalScore) {
    alert("Oops! You lose the game");
  } else {
    alert("It's a Tie: No winner!");
  }
}

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

// create a function that prints the current game round to the console
function gameHeader(header) {
  console.log("***************");
  console.log(`Round ${header}`);
  console.log("***************");
}

//call the game function to initialize the game
game();
