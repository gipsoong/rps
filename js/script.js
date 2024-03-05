let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[random];

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('You lose this round, Paper beats Rock!');
        return computerScore += 1;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You win this round, Rock beats Scissors!');
        return playerScore += 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You win this round, Paper beats Rock!');
        return playerScore += 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('You lose this round, Scissors beats Paper!');
        return computerScore += 1;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win this round, Paper beats Rock!');
        return playerScore += 1;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('You lose this round, Rock beats Scissors!');
        return computerScore += 1;
    }
}

let playerSelection = prompt('Rock, paper or scissors?');

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
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`The current leaderboard is: Player: ${playerScore} and Computer: ${computerScore}`);
        
        if (i == 4) {
            displayScore()
        }
    }
}

playGame();