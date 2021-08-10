//create an array to hold the random selections of the computer

const options = ['rock', 'paper', 'scissors'];


//create a function that randomly generates the computer's selection

function computerPlay(){ 
    const randomNumber = Math.floor(Math.random()*3);
    const randomOption = options[randomNumber];
    return randomOption;
}

//create a function that determines the winner of each game round depending on player selection and computer selection

function playRound(playerSelection, computerSelection){
    gameHeader(gameRound);
    let playOutcome
    playerScore = 0;
    computerScore = 0;
    const playerSelectionlowerCase = playerSelection.toLowerCase();
    const tie = playerSelectionlowerCase === computerSelection;
    console.log(`Player's selection: ${playerSelectionlowerCase}`);
    console.log(`Computer's selection: ${computerSelection}`);
}

//check if player selection is the same as computer selection

//check if the player or computer wins if player selection is rock 

//check if the player or computer wins if player selection is paper

//check if the player or computer wins if player selection is scissors 

// create a function that determines the number of game rounds and alert the winner to the browser window

//call the game function to initialize the game