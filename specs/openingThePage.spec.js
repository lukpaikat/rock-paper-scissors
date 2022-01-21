const { expect } = require('@jest/globals');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('...')).window;
document.body.innerHTML = /*html*/ `
<main></main>
`

// TODO: create a function that generate welcome page in main tag
describe('opening the game page', () => {
  test('the browser should display a welcome page', () => {
    // coba taruh app() di sini
    const main = document.querySelector('main');
    main.innerHTML = /* html */ `
      <h1 class="game-title">Rock Paper Scissors</h1>
      <p class="game-sub-title">The game</p>

      <button id="start-button">Start game</button>
    `
    expect(document.querySelector('.game-title').textContent).toEqual('Rock Paper Scissors')
    expect(document.getElementById('start-button').textContent).toEqual('Start game')
  });
});