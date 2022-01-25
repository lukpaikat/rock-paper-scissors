import resetScore from '../utils/resetScore.js';
import RoundPickPage from './roundPickPage.js';

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
    RoundPickPage.render();
  });
};

export default welcomePage;
