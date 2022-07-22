const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
let round = 1;


// function to get computer's choice
function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    return CHOICES[i];
}

// function for single round play
function playRound(playerSelection, computerSelection) {
    let playerWins;

    //Is it a tie?
    if (playerSelection == computerSelection) return "TIE";

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

    return `${playerWins ? 'WIN' : 'LOSE'}!`;
}

// Add eventListeners
let buttons = document.querySelectorAll('button');
buttons.forEach((btn, key) => {
    btn.addEventListener('click', () => {
        // These are the game options
        if (key < 3){
            playerSelection = CHOICES[key];
            computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);
        }
    });
});