const computerPlay = require('./utils/computerPlay.js')

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

// what the code should do
// TODO: click btn to play the game
// TODO: keeps score
// eslint-disable-next-line no-unused-vars
const initButton = (btnId, btnStrInput) => {
  // give event listeners to the game buttons
  const btnElement = document.getElementById(btnId);
  const roundResultElement = document.getElementById('round-result');
  btnElement.addEventListener('click', () => {
    roundResultElement.textContent = playRound(btnStrInput, computerPlay());
  });
}
