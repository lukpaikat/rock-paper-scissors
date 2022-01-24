import runningScore from '../data/runningScore.js';

const roundPickPage = () => {
  const { round, player, computer } = runningScore;
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
  <h2 class="round-count">Round: ${round}</h2>
  <div class="running-score-container">
    <p>Player: ${player}</p>
    <p>Computer: ${computer}</p>
  </div>
  <p>First to 5 win</p>
  <p>Pick a card to play</p>
  <button id="rock-button">Rock</button>
  <button id="paper-button">Paper</button>
  <button id="scissors-button">Scissors</button>
  `;

  const rockButton = document.getElementById('rock-button');
  const paperButton = document.getElementById('paper-button');
  const scissorsButton = document.getElementById('scissors-button');
};

export default roundPickPage;
