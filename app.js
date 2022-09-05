const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const resetGame = document.getElementById("reset-game");

const allGameIcons = document.querySelectorAll(".fa-regular");

let playerScore = 0;
let computerScore = 0;

//Object with game rules
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
  //choose a random number 0-4
  let number = Math.floor(Math.random() * 5);
  //Choose an item for computer
  computerItem = Object.keys(choices)[number];
  //Input the choice text
  computerChoiceEl.textContent = choices[computerItem].name;
  //Add a new class for selected item
  document.getElementById(`computer-${computerItem}`).classList.add("selected");
  return computerItem;
}

//Function of getting value from player selection
let item = "";
function select(hand) {
  //Remove class .selected for a clean slate for the previous results
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected');
  });
  //stop confetti animation for the previous results
  stopConfetti();
  //assign the value for player selection
  item = hand;
  //input the choice text
  playerChoiceEl.textContent = choices[item].name;
  //Assign the class name
  document.getElementById(`player-${item}`).classList.add("selected");
  //Trigger computer choice
  computerSelect();
  //Compare the results
  compareChoice();
}

//Function to compare choices
function compareChoice() {
  //Checking the choices against computer
  if (item === choices[computerItem].defeats[0] || item === choices[computerItem].defeats[0]) {
    resultText.textContent = "You lost.";
    computerScore++;
    computerScoreEl.textContent = computerScore;
  } else if (computerItem === choices[item].defeats[0] || computerItem === choices[item].defeats[0]) {
    resultText.textContent = "You Won!";
    playerScore++;
    playerScoreEl.textContent = playerScore;
    //Release the confetti animation in case of the win
    startConfetti();
  }  else {
    //All of the other results, include cases where there are no wins.
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