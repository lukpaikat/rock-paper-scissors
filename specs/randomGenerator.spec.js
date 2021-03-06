import randomGenerator from '../scripts/utils/randomGenerator.js';

describe('randomGenerator should generate random number within determined range', () => {
  for (let i = 1; i <= 10; i += 1) {
    test(`generate random number in range of 1 to 5 (repeat no: ${i})`, () => {
      const rangeStart = 1;
      const rangeEnd = 5;
      const randomNumber = randomGenerator(rangeStart, rangeEnd);
      expect(randomNumber).toBeGreaterThanOrEqual(rangeStart);
      expect(randomNumber).toBeLessThanOrEqual(rangeEnd);
    });
  }
});
