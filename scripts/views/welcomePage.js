import resetScore from '../utils/resetScore.js';
import RoundPickPage from './roundPickPage.js';

// this code should make browser display welcome page
const WelcomePage = {
  render() {
    const main = document.querySelector('main');
    main.innerHTML = /* html */ `
    <div class="flex-container">
      <div class="game-title">
        <h1 class="game-title__main-title animate-pop-in">Rock Paper Scissors</h1>
        <p class="game-title__sub-title animate-pop-in">The game</p>
      </div>
      <button class="buttons animate-pop-in" id="start-button">Start game</button>
    </div>
  `;
    this.afterRender();
  },

  afterRender() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
      resetScore();
      RoundPickPage.render();
    });
  },
};
export default WelcomePage;
