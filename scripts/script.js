const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

// function to get computer's choice
function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    return CHOICES[i];
}

// function for single round play
function playRound(playerSelection, computerSelection) {
    let playerWins;

    //Is playerSelection a valid option?
    if (CHOICES.includes(playerSelection)) return "INVALID"

    //Is it a tie?
    if (playerSelection == computerSelection) return "IT'S A TIE!";

    //Actual game logic
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        playerWins = true;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerWins = true;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        playerWins = true;
    } else {
        playerWins = false;
    }

    return `YOU ${playerWins ? 'WIN' : 'LOSE'}!`;
}

function game() {
    let playerSelection = null;
    let computerSelection = null;
    let result = null;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        computerSelection = computerPlay();

        // show inputs of both players
        console.log(`
        Player's Choice: ${playerSelection}
        Computer's Choice: ${computerSelection}`);

        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

// Add eventListeners
let buttons = document.querySelectorAll('button');
buttons.forEach((btn, key) => {
    btn.addEventListener('click', () => {
        if (key < 3) playRound(CHOICES[key], computerPlay());
    });
});