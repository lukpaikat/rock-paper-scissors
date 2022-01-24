/**
 * @jest-environment jsdom
 */
const { expect } = require('@jest/globals');
const welcomePage = require('../scripts/views/welcomePage');

// TODO: create a function that generate welcome page in main tag
describe('Opening the game page', () => {
  beforeEach(() => {
  document.body.innerHTML = /*html*/ `
    <main></main>
  `    
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Should display the game title', () => {
    const main = document.querySelector('main');
    welcomePage(main);
    expect(document.querySelector('.game-title').textContent).toEqual('Rock Paper Scissors')
  });

  test('Should display start button', () => {
    const main = document.querySelector('main');
    welcomePage(main);
    expect(document.getElementById('start-button')).toBeTruthy(); // null is defined
  });

  test.skip('should be able to start game when start button clicked', () => {
    expect(/* some elements in gameStart */).toBeDefined();
  });

  test.skip('should not display welcome page when a round started (gameStart) called', () => {
    const main = document.querySelector('main');
    welcomePage(main);
    const startButton = document.getElementById('start-button');
    startButton.click();
    expect(document.querySelector('.game-title')).toBeFalsy();
  });
});