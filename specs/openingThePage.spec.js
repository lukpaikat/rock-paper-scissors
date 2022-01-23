/**
 * @jest-environment jsdom
 */
const { expect } = require('@jest/globals');
const welcomeView = require('../scripts/views/welcomeView');

// TODO: create a function that generate welcome page in main tag
describe('opening the game page', () => {
  test('the browser should display a welcome page', () => {
    document.body.innerHTML = /*html*/ `
      <main></main>
    `
    const main = document.querySelector('main');
    // coba taruh app() di sini
    welcomeView(main);
    expect(document.querySelector('.game-title').textContent).toEqual('Rock Paper Scissors')
    expect(document.getElementById('start-button').textContent).toEqual('Start game')
  });
});