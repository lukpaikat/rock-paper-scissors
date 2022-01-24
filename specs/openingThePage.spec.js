/**
 * @jest-environment jsdom
 */
const welcomePage = require('../scripts/views/welcomePage');
// create a function that generate welcome page in main tag
describe('Opening the game page', () => {
  beforeEach(() => {
    document.body.innerHTML = /* html */ `
    <main></main>
  `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Should display the game title', () => {
    welcomePage();
    expect(document.querySelector('.game-title').textContent).toEqual('Rock Paper Scissors');
  });

  test('Should display start button', () => {
    welcomePage();
    expect(document.getElementById('start-button')).toBeTruthy(); // null is defined
  });

  test.skip('browser should display round pick page when start button clicked', () => {
    expect(/* some elements in gameStart */).toBeDefined();
  });

  test.skip('should not display welcome page when a round started (gameStart) called', () => {
    welcomePage();
    const startButton = document.getElementById('start-button');
    startButton.click();
    expect(document.querySelector('.game-title')).toBeFalsy();
  });
});
