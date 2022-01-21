const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('...')).window;
document.body.innerHTML = /*html*/ `
<main></main>
`

// TODO: create a function that generate welcome page in main tag
describe('opening the game page', () => {
  test('the browser should display a welcome page', () => {
    const main = document.querySelector('main');
    main.innerHTML = /* html */ `
    
    `
  });
});