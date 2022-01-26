import roundPickPageDisplay from '../utils/roundPickPageDisplay.js';
import resetScore from '../utils/resetScore.js';
import updateScore from '../utils/updateScore.js';

const FinalResultPage = {
  render({
    message,
    playerScore,
    computerScore,
  }) {
    roundPickPageDisplay('none');
    const overlay = document.querySelector('.overlay');
    overlay.innerHTML = /* html */ `
      <div class="overlay-inner">
        <h2>Game Over</h2>
        <p>${message}</p>
        <p>Player: ${playerScore}</p>
        <p>Computer: ${computerScore}</p>
        <button id="retry-button">retry game</button>
      </div>
    `;
    this.afterRender();
  },

  afterRender() {
    const retryButton = document.getElementById('retry-button');
    retryButton.onclick = () => {
      roundPickPageDisplay('block');
      resetScore();
      updateScore();
      document.querySelector('.overlay').innerHTML = '';
    };
  },
};

export default FinalResultPage;