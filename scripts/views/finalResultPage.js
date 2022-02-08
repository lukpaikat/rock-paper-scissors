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
    <div class="flex-container animate-fade-in">
      <div class="final-result">
        <h2>Game Over</h2>
        <p>${message}</p>
        <p>Player: ${playerScore}</p>
        <p>Computer: ${computerScore}</p>
        <button class="buttons" id="retry-button">retry game</button>
      </div>
    </div>
    `;
    this.afterRender();
  },

  afterRender() {
    const retryButton = document.getElementById('retry-button');
    retryButton.onclick = () => {
      roundPickPageDisplay('flex');
      resetScore();
      updateScore();
      document.querySelector('.overlay').innerHTML = '';
    };
  },
};

export default FinalResultPage;
