// execute initial functions here
import welcomePage from './views/welcomePage';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  welcomePage(main);
});
