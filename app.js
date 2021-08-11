//create an array to hold the random selections of the computer

const options = ["rock", "paper", "scissors"];

//create a function that randomly generates the computer's selection

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomOption = options[randomNumber];
  return randomOption;
}

//create a function that determines the winner of each game round depending on player selection and computer selection

function playRound(playerSelection, computerSelection) {
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
      playOutcome = `You loss! ${computerSelection} win ${playerSelection} `;
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
      playOutcome = `You loss! ${computerSelection} win ${playerSelection} `;
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
      playOutcome = `You loss! ${computerSelection} win ${playerSelection} `;
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

//call the game function to initialize the game
