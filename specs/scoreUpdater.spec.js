const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const scoreUpdater = require('../scripts/utils/scoreUpdater');

describe('ScoreUpdater', () => {
  test('the browser should show the player and computer score as 0', () => {
    const { document } = (new JSDOM('...')).window;
    document.body.innerHTML = /*html*/ `
        <p id="player-score">0</p>
        <p id="computer-score">0</p>
      `
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    expect(playerScore.textContent).toEqual('0');
    expect(computerScore.textContent).toEqual('0');
  });
  test('should be able to add score', () => {
    const { document } = (new JSDOM('...')).window;
    document.body.innerHTML = /*html*/ `
        <p id="player-score">0</p>
        <p id="computer-score">0</p>
      `
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    scoreUpdater(playerScore, 1);
    expect(playerScore.textContent).toEqual('1');
    expect(computerScore.textContent).toEqual('0');
  })
});