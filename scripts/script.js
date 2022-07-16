// function to get computer's choice
function computerPlay(){
    const randomNumber = Math.floor(Math.random() *3);
    let choice;
    switch(randomNumber){
        case 0:
            choice =  "ROCK";
            break;
        case 1:
            choice = "PAPER";
            break;
        case 2:
            choice = "SCISSORS";
            break;
    }
    return choice;
}

// function for single round play
function playRound(playerSelection, computerSelection){
    let playerWins;

    // convert input to upperCase
    playerSelection = playerSelection.toUpperCase();

    // show inputs of both players
    console.log(`
        Player's Choice: ${playerSelection}
        Computer's Choice: ${computerSelection}
    `);

    //Is playerSelection a valid option?
    if (!("ROCK,PAPER,SCISSORS".includes(playerSelection))){
        return "Kindly enter a valid game option.";
    }

    //Is it a tie?
    if(playerSelection == computerSelection){
        return "\tIt is a Tie! You both Win and Lose";
    }

    //Actual game logic
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        playerWins = true;
    }else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        playerWins = true;
    }else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        playerWins = true;
    }else{
        playerWins = false;
    }

    return `
    You ${playerWins ? 'Win' : 'Lose'}! 
    ${playerWins ? playerSelection : computerSelection} beats
    ${!playerWins ? playerSelection : computerSelection}
    `;
}

function game(){
    let playerSelection = null;
    let computerSelection = null;
    let result = null;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}