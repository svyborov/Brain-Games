import {
  randomOperator, randomNumber, numberOfQuestions, game,
} from '..';


const gameQuastion = 'What is the result of the expression?\n';

const number1Maker = () => {
  const numbers1 = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    numbers1.unshift(randomNumber());
  }
  return numbers1;
};
const number2Maker = () => {
  const numbers2 = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    numbers2.unshift(randomNumber());
  }
  return numbers2;
};
const operatorMaker = () => {
  const operators = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    operators.unshift(randomOperator());
  }
  return operators;
};

const questionMaker = (number1, number2, operator) => {
  const questions = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    questions.unshift(`${number1[i]} ${operator[i]} ${number2[i]}`);
  }
  return questions;
};

const correctAnswersMaker = (number1, number2, operator) => {
  const correctAnswers = [];
  let correctAnswer = 0;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    switch (operator[i]) {
      case '+':
        correctAnswer = number1[i] + number2[i];
        break;
      case '-':
        correctAnswer = number1[i] - number2[i];
        break;
      case '*':
        correctAnswer = number1[i] * number2[i];
        break;
      default:
        console.log('Вышли за рамки');
    }
    correctAnswers.unshift(String(correctAnswer));
  }
  return correctAnswers;
};

const numbers1 = number1Maker();
const numbers2 = number2Maker();
const operators = operatorMaker();
const questions = questionMaker(numbers1, numbers2, operators);
const correctAnswers = correctAnswersMaker(numbers1, numbers2, operators);

export default () => game(gameQuastion, questions, correctAnswers);
