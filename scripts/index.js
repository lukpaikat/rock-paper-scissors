// execute initial functions here
const welcomeView = require('./views/welcomeView');

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  welcomeView(main);
});