import runningScore from '../data/runningScore.js';
import updateScore from './updateScore.js';
import FinalResultPage from '../views/finalResultPage.js';

const checkScore = () => {
  const { player, computer } = runningScore;
  if (player >= 5) {
    // TODO: display final result
    FinalResultPage.render({
      message: 'You win the game!',
      playerScore: player,
      computerScore: computer,
    });
    // window.alert(`You win the game! ${player}-${computer}`);
    // window.location.reload();
  }
  if (computer >= 5) {
    // TODO: display final result
    FinalResultPage.render({
      message: 'You lose the game!',
      playerScore: player,
      computerScore: computer,
    });
    // window.alert(`You lose the game! & ${player}-${computer}`);
    // window.location.reload();
  }
  if (computer < 5 && player < 5) {
    const overlay = document.querySelector('.overlay');
    updateScore();
    overlay.innerHTML = '';
  }
};

export default checkScore;
