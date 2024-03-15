// initializing global variables
// playerScore/computerScore to keep track of the winner of each round, 
// the values will then get compared at the end of the game to declare the winner/loser or if it was a draw
let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const displayResult = document.querySelector('#display-result');
const displayRound = document.querySelector('#display-round');
const promptText = document.querySelector('h2 span');
const flavorText = document.querySelector('#flavor-text');

const displayPlayerScore = document.querySelector('#displayPlayerScore span');
const displayComputerScore = document.querySelector('#displayComputerScore span');

displayRound.textContent = roundCounter;
displayPlayerScore.textContent = playerScore;
displayComputerScore.textContent = computerScore;

rockBtn.addEventListener('click', function (e) {
    roundCounter += 1;
    playerSelection = 'ROCK';
    // console.log(roundCounter);
    // console.log(playerSelection);

    play();
});

paperBtn.addEventListener('click', function (e) {
    roundCounter += 1;
    playerSelection = 'PAPER';
    // console.log(roundCounter);
    // console.log(playerSelection);

    play();
});

scissorsBtn.addEventListener('click', function (e) {
    roundCounter += 1;
    playerSelection = 'SCISSORS';
    // console.log(roundCounter);
    // console.log(playerSelection);

    play();
});

function play() {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    promptText.textContent = '';
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayRound.textContent = roundCounter;

    if (roundCounter == 5) {
        displayScore();
    }
}

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
        flavorText.textContent = `(It's a tie! Both players chose ${computerSelection})`;
        // console.log("It's a tie!");
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        flavorText.textContent = `(Computer chose ${computerSelection}, you lost round ${roundCounter}!)`;
        // console.log('You lose this round, Paper beats Rock!');
        return computerScore += 1;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        flavorText.textContent = `(Computer chose ${computerSelection}, you won round ${roundCounter}!)`;
        // console.log('You win this round, Rock beats Scissors!');
        return playerScore += 1;
    } else if (playerSelection == '{PAPER}' && computerSelection == 'ROCK') {
        flavorText.textContent = `(Computer chose ${computerSelection}, you won round ${roundCounter}!)`;
        // console.log('You win this round, Paper beats Rock!');
        return playerScore += 1;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        flavorText.textContent = `(Computer chose ${computerSelection}, you lost round ${roundCounter}!)`;
        // console.log('You lose this round, Scissors beats Paper!');
        return computerScore += 1;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        flavorText.textContent = `(Computer chose ${computerSelection}, you won round ${roundCounter}!)`;
        // console.log('You win this round, Paper beats Rock!');
        return playerScore += 1;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        flavorText.textContent = `(Computer chose ${computerSelection}, you lost round ${roundCounter}!)`;
        // console.log('You lose this round, Rock beats Scissors!');
        return computerScore += 1;
    }
}

function displayScore() {
    if (playerScore == computerScore) {
        flavorText.textContent = 'Amazing, a tie after 5 rounds! Click one of the buttons below to start another game.';
        // console.log("Amazing, a tie after 5 rounds!");
    } else if (playerScore > computerScore) {
        flavorText.textContent = 'Congratulations, you win after 5 rounds! Click one of the buttons below to start another game.';
        // console.log("Congratulations, you win after 5 rounds!");
    } else if (computerScore > playerScore) {
        flavorText.textContent = 'You lost after 5 rounds, try again next time! Click one of the buttons below to start another game.';
        // console.log("You lost after 5 rounds, try again next time!");
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
        // checkPrompt();

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