let playerScore = 0;
let computerScore = 0;

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
    let playerInputChoice, playerChoice, playerFinalChoice;
    do {
        playerInputChoice = prompt("Please choose: rock, paper or scissors.");
        playerChoice = playerInputChoice.toLowerCase();
    } while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
    if (playerChoice === "rock"){
        playerFinalChoice = "Rock"
    } else if (playerChoice === "paper"){
        playerFinalChoice = "Paper"
    } else {
        playerFinalChoice = "Scissors"
    }
    return playerFinalChoice;
}

function playRound(computerSelection, playerSelection) {
    let roundString;
    if (computerSelection === playerSelection) {
        roundString = "Draw! " + computerSelection + " draws with " + playerSelection.toLowerCase() + ".";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        roundString = "You win! " + playerSelection + " beats " + computerSelection.toLowerCase() + ".";
        playerScore = ++playerScore
    } else {
        roundString = "You lose! "+ computerSelection + " beats " + playerSelection.toLowerCase() + ".";
        computerScore = ++ computerScore
    }
    return roundString;
}

function game() {
    let resultString, scoreString;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        resultString = playRound(computerSelection, playerSelection);
        alert(resultString)
        scoreString = "Player: " + playerScore.toString() + " - Computer: " + computerScore.toString();
        alert(scoreString)
        
    }
}

game();