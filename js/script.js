function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[random];

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You win! Paper beats Rock.";
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You win! Scissors beats Paper.";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You lose! Rock beats Scissors.";
    }
}

let playerSelection = prompt('Rock, paper or scissors?');

// console.log(playRound(playerSelection, computerSelection)); //

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();