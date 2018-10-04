import game from '..';

const gameQuastion = 'What is the result of the expression?\n';
const randomNumber = () => Math.floor(Math.random() * 100);
const randomOperator = () => {
  const operators = '+-*';
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};
const questionMaker = () => `${randomNumber()} ${randomOperator()} ${randomNumber()}`;

export default () => game(gameQuastion, questionMaker, eval);
