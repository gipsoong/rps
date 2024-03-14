// initializing global variables
// playerScore/computerScore to keep track of the winner of each round, 
// the values will then get compared at the end of the game to declare the winner/loser or if it was a draw

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";

function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[random];

    return computerChoice;
}

function checkPrompt() {
    if (playerSelection === 'ROCK' || playerSelection === 'PAPER' || playerSelection === 'SCISSORS') {
        return;
    } else if (playerSelection != 'ROCK' || playerSelection != 'PAPER' || playerSelection != 'SCISSORS') {
        alert("Your input is not recognized, please enter 'Rock', 'Paper' or 'Scissors' (not case-sensitive). Moving on to the next round.");
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

function displayScore() {
    if (playerScore == computerScore) {
        console.log("Amazing, a tie after 5 rounds!");
    } else if (playerScore > computerScore) {
        console.log("Congratulations, you win after 5 rounds!");
    } else if (computerScore > playerScore) {
        console.log("You lost after 5 rounds, try again next time!");
    }
}

function playGame() {
    // utilizing for loop to execute the five rounds
    for (let i = 0; i < 5; i++) {
        // Prompts for the player's input, after that it converts the string to uppercase for easier validation
        playerSelection = prompt(`ROUND ${i + 1}: Rock, paper or scissors?`).toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}`);

        // checks prompt in order to display appropriate message
        checkPrompt();

        playRound(playerSelection, computerSelection);
        console.log(`The current leaderboard is: Player: ${playerScore} and Computer: ${computerScore}`);
        
        // displays the final score at the end of the for loop
        if (i == 4) {
            displayScore()
        }
    }
}

// initializes the game
// playGame();