import checkScore from '../utils/checkScore.js';

const ShowdownPage = {
  render({
    resultMessage,
    playerCard,
    computerCard,
  }) {
    const main = document.querySelector('main');
    main.innerHTML = /* html */ `
    <div class='card-container'>
      <img class="card" src="./assets/hand-images/${computerCard}-hand.svg">
    </div>
    <div>
      <p>${resultMessage}</p>
    </div>
    <div>
      <img class="card" src="./assets/hand-images/${playerCard}-hand.svg">
    </div>
    <button id="continue-button">continue</button>
    `;
    this.afterRender();
  },

  afterRender() {
    const continueButton = document.getElementById('continue-button');
    continueButton.addEventListener('click', () => {
      checkScore();
      // this function show continue button
      // continue button contains scoreChecking function
      // which wether return the player to round pick or game result
    });
  },
};

export default ShowdownPage;
