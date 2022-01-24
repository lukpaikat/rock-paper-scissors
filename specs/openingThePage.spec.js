/**
 * @jest-environment jsdom
 */
import welcomePage from '../scripts/views/welcomePage.js';
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

  test('browser should display round pick page when start button clicked', () => {
    welcomePage();
    expect(document.querySelector('.game-title')).toBeTruthy();
  });

  test('should not display welcome page when a round started', () => {
    welcomePage();
    const startButton = document.getElementById('start-button');
    startButton.click();
    expect(document.querySelector('.game-title')).toBeFalsy();
  });
});
