// execute initial functions here
const welcomePage = require('./views/welcomePage');

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  welcomePage(main);
});