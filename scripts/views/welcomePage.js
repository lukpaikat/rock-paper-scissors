import resetScore from '../utils/resetScore';
import roundPickPage from './roundPickPage';

// const resetScore = require('../utils/resetScore');
// const roundPickPage = require('./roundPickPage');

// this code should make browser display welcome page
const welcomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
    <h1 class="game-title">Rock Paper Scissors</h1>
    <p class="game-sub-title">The game</p>
    <button id="start-button">Start game</button>
  `;

  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    resetScore();
    roundPickPage();
  });
};

export default welcomePage;
