const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
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
    if (playerSelection == computerSelection) return "TIED";

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

    return playerWins ? "WON" : "LOST";
}

//function to update DOM sections
function renderData(){
    document.querySelector("#RemRounds").textContent = 5 -roundsPlayed;
    document.querySelector("#PlayerChoice").textContent = playerSelection;
    document.querySelector("#ComputerChoice").textContent = computerSelection;
    document.querySelector("#Results").textContent = roundsPlayed > 0 ?`YOU ${result}!`:"";
    document.querySelector("#PlayerScore").textContent = playerScore;
    document.querySelector("#ComputerScore").textContent = compScore;
    document.querySelector("#DrawScore").textContent = drawScore;
    if(roundsPlayed == 5 || roundsPlayed == 0) 
        document.querySelector("#Winner").textContent = winner;
}

//EventListener
let buttons = document.querySelectorAll('button');
buttons.forEach((btn, key) => {
    btn.addEventListener('click', () => {
        // Listening for Game Options
        if (key < 3){
            playerSelection = CHOICES[key];
            computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);

            if(result == "WON") ++playerScore;
            if(result == "LOST") ++compScore;
            if(result == "TIED") ++drawScore;
            ++roundsPlayed;
        }else{
            roundsPlayed = 0;
            playerScore = 0;
            compScore = 0;
            drawScore = 0;
            playerSelection = "";
            computerSelection = "";
            result = "";
            winner = "";
        }
        
        // disable button when game rounds are over
        if(roundsPlayed == 5){
            winner = playerScore > compScore ? "PLAYER WINS" : "COMPUTER WINS";
            buttons.forEach((btn,k)=>{
                if(k < 3) btn.disabled = true;
            });
        }

        // enable buttons when game is reset
        if(roundsPlayed == 0){
            winner = ""
            buttons.forEach((btn,k)=>{
                if(k < 3) btn.disabled = false;
            });
        }

        // update DOM
        renderData();
    });
});