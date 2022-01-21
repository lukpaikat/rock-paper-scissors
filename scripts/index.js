// execute initial functions here

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
    <h1 class="game-title">Rock Paper Scissors</h1>
    <p class="game-sub-title">The game</p>

    <button id="start-button">Start game</button>
  `
});