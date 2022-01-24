const { round, player, computer } = require('../data/runningScore.js');

const roundPickPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
  <h2 class="round-count">Round: ${round}</h2>
  <p>First to 5 win</p>
  <div class="running-score-container">
    <p>Player: ${player}</p>
    <p>Computer: ${computer}</p>
  </div>
  <p>Pick a card to play</p>
  <button id="rock-button">Rock</button>
  <button id="paper-button">Paper</button>
  <button id="scissors-button">Scissors</button>
  `;
};

module.exports = roundPickPage;
