function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    if (choiceInt === 0) {
        return "Rock";
    }
    else if (choiceInt === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function getPlayerChoice() {
    let playerChoice = prompt("Please choose: rock, paper or scissors.")
    return playerChoice
}
let computerSelection = getComputerChoice();
console.log(computerSelection);
let playerSelection = getPlayerChoice();
console.log(playerSelection);