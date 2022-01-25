import whoIsWeakAgainst from '../data/whoIsWeakAgainst.js';
import runningScore from '../data/runningScore.js';
import ShowdownPage from '../views/showdownPage.js';

const playRound = (playerCard, computerCard) => {
  runningScore.round += 1;
  // send result to game score updater
  let resultMessage = 'Draw!';
  if (whoIsWeakAgainst(playerCard) === computerCard) {
    resultMessage = `You win! ${playerCard} beats ${computerCard}`;
    runningScore.player += 1;
  }
  if (whoIsWeakAgainst(computerCard) === playerCard) {
    resultMessage = `You lose! ${computerCard} beats ${playerCard}`;
    runningScore.computer += 1;
  }

  console.log(` ${resultMessage}
  Round: ${runningScore.round}
  player: ${runningScore.player}
  computer: ${runningScore.computer}
  `);

  ShowdownPage.render({
    resultMessage,
    playerCard,
    computerCard,
  });
};

export default playRound;
