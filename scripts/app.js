const computerPlay = require('./utils/computerPlay.js')

const whoIsWeakAgainst = (playerSelection) => {
  // return who is weak against playerSelection
  const loserData = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  return loserData[playerSelection];
};

const playRound = (playerSelection, computerSelection) => {
  // return a string that declares the winner of the round
  console.log(`You pick ${playerSelection} and the computer pick ${computerSelection}`)
  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  if (whoIsWeakAgainst(playerSelection) === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const normalizedPromptValue = (gameRounds) => {
  const promptValue = window
  .prompt(`Enter your choice: rock, paper, or scissors (Game round: ${gameRounds})`)
  .trim()
  .toLowerCase();
  return promptValue;
}

const getUserInput = (gameRounds) => {
  const inputRestriction = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  }
  let userInput = null;
  let retries = 0;

  while(userInput !== inputRestriction[userInput]) {
    if (retries) {
      window.alert("wrong input, please enter rock, paper, or scissors");
    }
    userInput = normalizedPromptValue(gameRounds);
    retries++
  }
  return userInput;
};

// what the code should do
// TODO: click btn to play the game
// TODO: keeps score

const initButton = (btnId, btnStrInput) => {
  // give event listeners to the game buttons
  const btnElement = document.getElementById(btnId);
  const roundResultElement = document.getElementById('round-result');
  btnElement.addEventListener('click', () => {
    roundResultElement.textContent = playRound(btnStrInput, computerPlay());
  });
}