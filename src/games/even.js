import {
  randomNumber, game, numberOfQuestions,
} from '..';

const gameQuastion = 'Answer "yes" if number even otherwise answer "no".\n';
const evenMaker = () => {
  const questions = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    questions.unshift((String(randomNumber())));
  }
  return questions;
};

const notAEven = num => (num % 2 === 0 ? 'yes' : 'no');

const correctAnswersMaker = (questionsToAnswer) => {
  const correctAnswers = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    correctAnswers.push(notAEven(Number(questionsToAnswer[i])));
  }
  return correctAnswers;
};

const questions = evenMaker();
const correctAnswers = correctAnswersMaker(questions);
export default () => game(gameQuastion, questions, correctAnswers);
