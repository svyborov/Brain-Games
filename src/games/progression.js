import randomNumber from '../utils';
import game from '..';

const description = 'What number is missing in this progression?';
const progressionSize = 10;
const maxProgressionStep = 10;
const maxFirstElement = 10;

const makeProgression = () => {
  const progression = [];
  const progressionStep = randomNumber(maxProgressionStep);
  let porgressionElement = randomNumber(maxFirstElement);
  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(porgressionElement);
    porgressionElement += progressionStep;
  }
  return progression;
};

const questionMaker = () => {
  const indexOfQuestionElement = randomNumber(progressionSize);
  const progression = makeProgression();
  const correctAnswer = progression[indexOfQuestionElement];
  progression.splice(indexOfQuestionElement, 1, '..');
  const question = `${progression}`;
  return [question, String(correctAnswer)];
};

export default () => game(description, questionMaker);
