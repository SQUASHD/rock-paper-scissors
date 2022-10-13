let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return 'ROCK'
		case 1:
			return 'PAPER'
		case 2:
			return 'SCISSORS'
	}
}

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const scoreMessage = document.getElementById('scoreMessage');

const defaultScoreMessage = 'First to 5 points wins'

rockBtn.addEventListener('click', () => handleClick('ROCK'));
paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));

function handleClick(playerSelection) {
	if (checkGameOver()){
		return
	}
	const computerSelection = getComputerChoice()
	playRound(computerSelection, playerSelection)
	updateScore()
	if (playerScore === 5) {
		scoreMessage.textContent = 'You win!'
		return
	}
	else if (computerScore ===5) {
		scoreMessage.textContent = 'You lose!'
		return
	}
}

function playRound(computerSelection, playerSelection) {
	if (computerSelection === playerSelection) {
		roundWinner = 'tie'
	} 
	else if (
		(playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
		(playerSelection === "PAPER" && computerSelection === "ROCK") || 
		(playerSelection === "SCISSORS" && computerSelection === "PAPER")
	) {
		playerScore++;
		roundWinner = 'player';
	} 
	else {
		computerScore++;
		roundWinner = 'computer'
	}
	updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function updateScore() {
	playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}`
  }
  else if (winner === 'computer') {
    scoreMessage.textContent = `${playerSelection} is beaten by ${computerSelection.toLowerCase()}`
  } 
	else {
		scoreMessage.textContent = `${playerSelection} ties with ${computerSelection.toLowerCase()}`
	}
}

function checkGameOver() {
	return playerScore === 5 || computerScore === 5
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	scoreMessage.textContent = defaultScoreMessage
}