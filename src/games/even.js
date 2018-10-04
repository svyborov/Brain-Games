import randomNumber from '../utils';
import game from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
const description = 'Answer "yes" if number even otherwise answer "no".\n';
const questionMaker = () => {
  const question = randomNumber();
  const correctAnswer = isEven(Number(question));
  return [question, correctAnswer];
};

export default () => game(description, questionMaker);
