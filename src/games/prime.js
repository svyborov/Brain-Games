import { randomNumber, isEven } from '../utils';
import game from '..';

const isPrime = (num) => {
  const minimalOddDivider = 3;
  if (num === 2) {
    return true;
  }
  if (num <= 1 || isEven(num)) {
    return false;
  }
  for (let i = minimalOddDivider; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionMaker = () => {
  const question = randomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(description, questionMaker);
