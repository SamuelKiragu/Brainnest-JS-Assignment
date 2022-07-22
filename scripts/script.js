const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const ELEMENT_SELECTORS = [
    "#PlayerChoice","#ComputerChoice","#Results","#PlayerScore","#ComputerScore"
];

//game variables
let roundsPlayed = 0;
let playerScore = 0;
let compScore = 0;
let drawScore = 0;
let playerSelection = null;
let computerSelection = null;
let result = null;
let winner;

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

function renderData(){
    document.querySelector("#RemRounds").textContent = 5 -roundsPlayed;
    document.querySelector("#PlayerChoice").textContent = playerSelection;
    document.querySelector("#ComputerChoice").textContent = computerSelection;
    document.querySelector("#Results").textContent = result;
    document.querySelector("#PlayerScore").textContent = playerScore;
    document.querySelector("#ComputerScore").textContent = compScore;
    document.querySelector("#DrawScore").textContent = drawScore;
    if(roundsPlayed == 5) document.querySelector("#Winner").textContent = winner;
}

let buttons = document.querySelectorAll('button');
buttons.forEach((btn, key) => {
    btn.addEventListener('click', () => {
        // Listening for Game Options
        if (key < 3){
            playerSelection = CHOICES[key];
            computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);

            if(result == "WIN!") ++playerScore;
            if(result == "LOSE!") ++compScore;
            if(result == "TIE") ++drawScore;
            ++roundsPlayed;
        }else{
            roundsPlayed = 0;
            playerScore = 0;
            compScore = 0;
            drawScore = 0;
            playerSelection = "";
            computerSelection = "";
            result = "";
        }
        if(roundsPlayed == 5){
            winner = playerScore > compScore ? "PLAYER WINS" : "COMPUTER WINS";
            // add functionality to disable play buttons
            // add functionality to enable reset button
        }
        renderData();
    });
});