function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor((Math.random() * choices.length));
    let computerChoice = choices[random];

    console.log(computerChoice);

    return computerChoice;
}

getComputerChoice();

function playRPS(playerSelection, computerSelection) {

}

