import runningScore from '../data/runningScore.js';
import playRound from '../utils/playRound.js';
import generateComputerCard from '../utils/generateComputerCard.js';

const RoundPickPage = {
  render() {
    const { round, player, computer } = runningScore;
    const main = document.querySelector('main');
    main.innerHTML = /* html */ `
      <div class="round-pick">
        <h2 class="round-heading">Round: <span id=round-count>${round}</span></h2>
        <div class="running-score-container">
          <p>Player: <span id="player-score">${player}</span></p>
          <p>Computer: <span id="computer-score">${computer}</span></p>
        </div>
        <p>First to 5 win</p>
        <p>Pick a card to play</p>
        <button id="rock-button">Rock</button>
        <button id="paper-button">Paper</button>
        <button id="scissors-button">Scissors</button>
      </div>
      <div class="overlay"></div>
    `;
    this.afterRender();
  },

  afterRender() {
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
};

export default RoundPickPage;
