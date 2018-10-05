import randomNumber from '../utils';
import game from '..';

const operators = '+-*';
const description = 'What is the result of the expression?';
const randomOperator = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};

const questionMaker = () => {
  const number1 = randomNumber(10);
  const number2 = randomNumber(10);
  const operator = randomOperator();
  const question = `${number1} ${operator} ${number2}`;
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      console.log('Вышли за рамки');
  }
  return [question, String(correctAnswer)];
};

export default () => game(description, questionMaker);
