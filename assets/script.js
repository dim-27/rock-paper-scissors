

function getPlayerChoice() {
  let choice ;
  let valid = false;

  while(!valid) {
    let userInput = window.prompt("Choose your weapon: Rock, Paper, or Scissors");
    userInput = userInput.toLowerCase();

   if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    choice = userInput;
    valid = true;
    break;
   } else {
    alert("You enterd a wrong input, please try again :)")
    continue;
   }
  }

  return choice;
}


// write the logic to get the computer choice
function getComputerChoice() {
  let items = ["rock", "paper", "scissors"];
  const getRandom = items[Math.floor(Math.random() * items.length)];
  return getRandom;
}


function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  let maxRound = 5;

  function playRound(playerChoice, computerChoice) {
    //declare human and computer score
  
    if (playerChoice === computerChoice) {
      console.log("it's a tie!")
    } else if (playerChoice === "rock" && computerChoice === 'scissors') {
      playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      computerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
    } 
  
  }

  while (maxRound > 0) {

    const playerSelect = getPlayerChoice();
    const computerSelect = getComputerChoice();

    playRound(playerSelect, computerSelect);
    console.log("You Selected", playerSelect);
    console.log("The Computer selected", computerSelect)

    console.log(`Updated Score: You ${playerScore} , Computer ${computerScore}`);
    
    maxRound--
  }

  if(playerScore > computerScore) {
    alert("You Won! Congrats!")
  } else {
    alert("You Lose! What a Shame :(")
  }
}

playGame();
