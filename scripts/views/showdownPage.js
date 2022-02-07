import checkScore from '../utils/checkScore.js';
import roundPickPageDisplay from '../utils/roundPickPageDisplay.js';

const ShowdownPage = {
  render({
    resultMessage,
    playerCard,
    computerCard,
  }) {
    const overlay = document.querySelector('.overlay');
    roundPickPageDisplay('none');
    overlay.innerHTML = /* html */ `
    <div class="showdown-container">
      <div class="card-container">
        <p class="computer-tag">Computer</p>
        <img class="card" src="./assets/hand-cards/${computerCard}-card.svg">
      </div>
      <div class="message-container">
        <p class="round-result-message">${resultMessage}</p>
        <button class="buttons" id="continue-button">continue</button>
      </div>
      <div class="card-container">
        <p class="player-tag">Player</p>
        <img class="card" src="./assets/hand-cards/${playerCard}-card.svg">
      </div>
    </div>
    `;
    this.afterRender();
  },

  afterRender() {
    const continueButton = document.getElementById('continue-button');
    continueButton.addEventListener('click', () => {
      roundPickPageDisplay('flex');
      checkScore();
      // this function show continue button
      // continue button contains scoreChecking function
      // which wether return the player to round pick or game result
    });
  },
};

export default ShowdownPage;
