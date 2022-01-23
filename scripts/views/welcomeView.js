// const initButton = require('./utils/btn-initiator');

// this code should make browser display welcome page
const welcomeView = (mainElm) => {
  const main = mainElm;
  main.innerHTML = /* html */ `
    <h1 class="game-title">Rock Paper Scissors</h1>
    <p class="game-sub-title">The game</p>
    <button id="start-button">Start game</button>
  `;
};

module.exports = welcomeView;