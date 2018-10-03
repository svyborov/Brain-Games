import {
  randomNumber, numberOfQuestions, game,
} from '..';


const gameQuastion = 'Find the greatest common divisor of given numbers.\n';

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

const nod = (number1, numer2) => {
  if (numer2 > 0) {
    const divisor = number1 % numer2;
    return nod(numer2, divisor);
  }
  return Math.abs(number1);
};

const nodMaker = (numbers1, numbers2) => {
  const nods = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    nods.unshift(String(nod(numbers1[i], numbers2[i])));
  }
  return nods;
};

const questionMaker = (number1, number2) => {
  const questions = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    questions.unshift(`${number1[i]} ${number2[i]}`);
  }
  return questions;
};


const numbers1 = number1Maker();
const numbers2 = number2Maker();
const questions = questionMaker(numbers1, numbers2);
const nods = nodMaker(numbers1, numbers2);

export default () => game(gameQuastion, questions, nods);
