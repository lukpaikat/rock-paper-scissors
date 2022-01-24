// const initButton = require('./utils/btn-initiator');

// this code should make browser display welcome page
const welcomePage = (mainElm) => {
  const main = mainElm;
  main.innerHTML = /* html */ `
    <h1 class="game-title">Rock Paper Scissors</h1>
    <p class="game-sub-title">The game</p>
    <button id="start-button">Start game</button>
  `;
  
  // const startButton = document.getElementById('start-button');
  // startButton.addEventListener('click',  /*playRound()*/)
};

module.exports = welcomePage;