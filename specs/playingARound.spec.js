/**
 * @jest-environment jsdom
 */

import playRound from '../scripts/utils/playRound.js';
import runningScore from '../scripts/data/runningScore.js';

describe('Playing a game round', () => {
  let playerScore;
  let computerScore;

  beforeEach(() => {
    playerScore = runningScore.player;
    computerScore = runningScore.computer;
  });

  afterEach(() => {
    runningScore.player = 0;
    runningScore.computer = 0;
  });

  test('Should not update score if player\'s choice equal to computer\'s', () => {
    playRound('rock', 'rock');
    expect(runningScore.computer).toEqual(computerScore);
    expect(runningScore.player).toEqual(playerScore);
  });
  test('Should update the player score if the player won', () => {
    playRound('scissors', 'paper');
    playRound('rock', 'scissors');
    playRound('paper', 'rock');
    expect(runningScore.player).toBeGreaterThan(playerScore);
    expect(runningScore.computer).toEqual(computerScore);
  });
  test('Should update the computer score if the computer won', () => {
    playRound('paper', 'scissors');
    playRound('rock', 'paper');
    playRound('scissors', 'rock');
    expect(runningScore.player).toEqual(playerScore);
    expect(runningScore.computer).toBeGreaterThan(computerScore);
  });
});
