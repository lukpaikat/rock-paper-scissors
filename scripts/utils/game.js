import RoundPickPage from '../views/roundPickPage.js';
import playRound from './playRound.js';
import generateComputerCard from './generateComputerCard.js';

const game = {
  start() {
    RoundPickPage.render();
    const rockButton = document.getElementById('rock-button');
    const paperButton = document.getElementById('paper-button');
    const scissorsButton = document.getElementById('scissors-button');

    rockButton.addEventListener('click', () => {
      playRound('rock', generateComputerCard());
    });
    paperButton.addEventListener('click', () => {
      playRound('paper', generateComputerCard());
    });
    scissorsButton.addEventListener('click', () => {
      playRound('scissors', generateComputerCard());
    });
  },

  
}