import randomNumber from '../utils';
import game from '..';

const minPrimeNumber = 2;
const isPrime = (num) => {
  for (let i = num - 1; i > minPrimeNumber; i -= 1) {
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
  return [question, String(correctAnswer)];
};

export default () => game(description, questionMaker);
