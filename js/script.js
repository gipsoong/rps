let playerScore = 0;
let computerScore = 0;
let isPromptValid;

function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[random];

    return computerChoice;
}

function checkPrompt() {
    if (playerSelection === 'ROCK' || playerSelection === 'PAPER' || playerSelection === 'SCISSORS') {
        isPromptValid = true;
        return;
    } else if (playerSelection != 'ROCK' || playerSelection != 'PAPER' || playerSelection != 'SCISSORS') {
        isPromptValid = false;
        alert("Your input is not recognized, please refresh the page and enter 'Rock', 'Paper' or 'Scissors'. It does not have to be capitalized.");
        return;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        console.log('You lose this round, Paper beats Rock!');
        return computerScore += 1;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('You win this round, Rock beats Scissors!');
        return playerScore += 1;
    } else if (playerSelection == '{PAPER}' && computerSelection == 'ROCK') {
        console.log('You win this round, Paper beats Rock!');
        return playerScore += 1;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        console.log('You lose this round, Scissors beats Paper!');
        return computerScore += 1;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log('You win this round, Paper beats Rock!');
        return playerScore += 1;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        console.log('You lose this round, Rock beats Scissors!');
        return computerScore += 1;
    } 
}

let playerSelection = prompt('Rock, paper or scissors?').toUpperCase();

function displayScore() {
    if (playerScore == computerScore) {
        console.log("Amazing, a tie after 5 rounds!");
    } else if (playerScore > computerScore) {
        console.log("Congratulations, you win after 5 rounds!");
    } else if (computerScore > playerScore) {
        console.log("Unfortunate, you lost after 5 rounds.");
    }
}

function playGame() {
    checkPrompt();

    if (isPromptValid == true) {
        for (let i = 0; i < 5; i++) {
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            console.log(`The current leaderboard is: Player: ${playerScore} and Computer: ${computerScore}`);
            
            if (i == 4) {
                displayScore()
            }
        }
    } else if (isPromptValid == false) {
        return;
    }
}

playGame(); 