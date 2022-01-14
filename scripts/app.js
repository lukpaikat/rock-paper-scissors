const computerPlay = require('./utils/computerPlay.js')

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
