import randomNumber from '../utils';
import game from '..';

const description = 'Find the greatest common divisor of given numbers.';
const nod = (number1, number2) => {
  if (number2 > 0) {
    const divisor = number1 % number2;
    return nod(number2, divisor);
  }
  return Math.abs(number1);
};

const questionMaker = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(nod(number1, number2));
  return [question, String(correctAnswer)];
};

export default () => game(description, questionMaker);
