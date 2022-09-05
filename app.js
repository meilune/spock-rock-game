const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const resetGame = document.getElementById("reset-game");

let playerScore = 0;
let computerScore = 0;

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

//Function of computer selection calculated
let computerItem = "";
function computerSelect() {
  let number = Math.floor(Math.random() * 5);
  computerItem = Object.keys(choices)[number];
  computerChoiceEl.textContent = choices[computerItem].name;
  return computerItem;
}

//Function of getting value from player selection
let item = "";
function select(hand) {
  stopConfetti();
  item = hand;
  playerChoiceEl.textContent = choices[item].name;
  computerSelect();
  compareChoice();
}

//Function to compare choices
function compareChoice() {
  if (item === choices[computerItem].defeats[0] || item === choices[computerItem].defeats[0]) {
    resultText.textContent = "You lost.";
    computerScore++;
    computerScoreEl.textContent = computerScore;
  } else if (computerItem === choices[item].defeats[0] || computerItem === choices[item].defeats[0]) {
    resultText.textContent = "You Won!";
    playerScore++;
    playerScoreEl.textContent = playerScore;
    startConfetti();
  }  else {
    resultText.textContent = "It's A Tie!";
  }
} 

//Function to clean the board
function refreshGame() {
  playerScore = 0;
  computerScore = 0;
  location.reload();
}
resetGame.addEventListener('click', refreshGame);

