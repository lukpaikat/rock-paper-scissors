// initiate game showdown
// maybe should be called cards initiator

import generateComputerCard from './generateComputerCard.js';
import playRound from './playRound.js';
// what the code should do
// click btn to pick the game choice
const initCard = (btnElement, btnStrInput) => {
  // give event listeners to the game buttons
  const roundResultElement = document.getElementById('round-result');
  btnElement.addEventListener('click', () => {
    roundResultElement.textContent = playRound(btnStrInput, generateComputerCard());
  });
};

export default initCard;
