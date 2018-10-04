import randomNumber from '../utils';
import game from '..';

const operators = '+-*';
const description = 'What is the result of the expression?\n';
const randomOperator = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};
const questionMaker = () => {
  const question = `${randomNumber()} ${randomOperator()} ${randomNumber()}`;
  const correctAnswer = eval(question);
  return [question, correctAnswer];
};

export default () => game(description, questionMaker);
