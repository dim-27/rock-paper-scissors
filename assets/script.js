let humanScore = 0;
let computerScore = 0;

const weapons = document.getElementById('weapons');
const playerChoice = document.getElementById('player-choixe');
const computerChoice = document.getElementById('computer-choice');
const displayResults = document.getElementById('display-results'); 
const gameResult = document.getElementById('game-result');
const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#computer-score');
const getAllWeapons = document.querySelectorAll('#weapons');
const showOverlay = document.querySelector('#overlay');
const restartButton = document.querySelector('#game-restart');


// write the logic to get the computer choice
function getComputerChoice() {
  let items = ["rock", "paper", "scissors"];
  const getRandom = items[Math.floor(Math.random() * items.length)];
  console.log(getRandom);
  return getRandom;
}

getAllWeapons.forEach((weapon) => {
  weapon.addEventListener('click',  (e) => {
    btnClass = e.target.classList;

    if (btnClass.contains('rock')) {
      displayChoice('rock');      
    } else if (btnClass.contains('paper')) {
      displayChoice('paper');
    } else {
      displayChoice('scissors')
    }
  })
})

function finalResults() {
  if (humanScore === 5 || computerScore === 5) {
    showOverlay.style.display = 'flex';
    if(humanScore > computerScore) {
      gameResult.textContent = 'Congrats! You Won the Game!';
    } else {
      gameResult.textContent = 'NO! You Lose :(' 
    }
  }
}

function gameRestart() {
  showOverlay.style.display = 'none';
  humanScore = 0;
  computerScore = 0;
  playerScore.innerHTML = 0;
  cpuScore.innerHTML = 0;
  displayResults.innerHTML = '';
}


function displayChoice(playerSelect) {
  let computerSelect = getComputerChoice();

  if (playerSelect === computerSelect) {
    displayResults.textContent = "It's a Draw!";
  } else if (
    (playerSelect === "rock" && computerSelect === "scissors") ||
    (playerSelect === "paper" && computerSelect === "rock") ||
    (playerSelect === "scissors" && computerSelect === "paper")
  ) {
    humanScore++;
    displayResults.textContent = "CONGRATS, You Won this round!";
    playerScore.textContent = humanScore;
  } else {
    computerScore++
    displayResults.textContent = "You lost this round!"
    cpuScore.textContent = computerScore;
  }

  finalResults();
}

restartButton.addEventListener('click', gameRestart);





