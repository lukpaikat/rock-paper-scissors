const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Initial player and computer score', () => {
  test('should seen player and computer score as 0', () => {
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
});