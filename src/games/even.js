import { randomNumber, isEven } from '../utils';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const questionMaker = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(description, questionMaker);
