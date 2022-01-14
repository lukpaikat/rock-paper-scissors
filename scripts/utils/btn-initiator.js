const computerPlay = require('./utils/computerPlay.js');
const playRound = require('../utils/playRound');
// what the code should do
// TODO: click btn to pick the game choice
const initButton = (btnElement, btnStrInput) => {
  // give event listeners to the game buttons
  const roundResultElement = document.getElementById('round-result');
  btnElement.addEventListener('click', () => {
    roundResultElement.textContent = playRound(btnStrInput, computerPlay());
  });
}

module.exports = initButton;