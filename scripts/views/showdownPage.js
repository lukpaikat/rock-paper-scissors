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
      <div class='card-container'>
        <img class="card" src="./assets/hand-cards/${computerCard}-card.svg">
      </div>
      <div>
        <p>${resultMessage}</p>
      </div>
      <div>
        <img class="card" src="./assets/hand-cards/${playerCard}-card.svg">
      </div>
      <button id="continue-button">continue</button>
    `;
    this.afterRender();
  },

  afterRender() {
    const continueButton = document.getElementById('continue-button');
    continueButton.addEventListener('click', () => {
      roundPickPageDisplay('block');
      checkScore();
      // this function show continue button
      // continue button contains scoreChecking function
      // which wether return the player to round pick or game result
    });
  },
};

export default ShowdownPage;
