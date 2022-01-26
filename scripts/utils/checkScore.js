import runningScore from '../data/runningScore.js';
import RoundPickPage from '../views/roundPickPage.js';

const checkScore = () => {
  const { player, computer } = runningScore;
  if (player >= 5) {
    window.alert(`You win the game! ${player}-${computer}`);
    window.location.reload();
  }
  if (computer >= 5) {
    window.alert(`You lose the game! & ${player}-${computer}`);
    window.location.reload();
  }
  if (computer < 5 && player < 5) {
    RoundPickPage.render();
  }
};

export default checkScore;
