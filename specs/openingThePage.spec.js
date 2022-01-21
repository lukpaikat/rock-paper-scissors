/**
 * @jest-environment jsdom
 */
const { expect } = require('@jest/globals');

// TODO: create a function that generate welcome page in main tag
describe('opening the game page', () => {
  test('the browser should display a welcome page', () => {
    document.body.innerHTML = /*html*/ `
      <main></main>
    `
    // coba taruh app() di sini
    const app = require('../scripts/app');
    app();
    expect(document.querySelector('.game-title').textContent).toEqual('Rock Paper Scissors')
    expect(document.getElementById('start-button').textContent).toEqual('Start game')
  });
});