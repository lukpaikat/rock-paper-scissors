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
        <p class="round-info">First to 5 win</p>
        <p class="round-info">Pick a card to play</p>
        <div class="card-buttons">
          <div>
            <button class="card-buttons__button" id="rock-button"><img src="./assets/hand-cards/rock-card.svg"></button>
            <p class="card-buttons__description">Strong against scissors</p>
          </div>
          <div>
            <button class="card-buttons__button" id="paper-button"><img src="./assets/hand-cards/paper-card.svg"></button>
            <p class="card-buttons__description">Strong against rock</p>
          </div>
          <div>
            <button class="card-buttons__button" id="scissors-button"><img src="./assets/hand-cards/scissors-card.svg"></button>
            <p class="card-buttons__description">Strong against paper</p>
          </div>
        </div>
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
