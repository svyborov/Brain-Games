import randomNumber from '../utils';
import game from '..';

const description = 'What number is missing in this progression?\n';
const makeProgression = () => {
  const progression = [];
  const progressionSize = 10;
  const progressionStep = randomNumber();
  let porgressionElement = randomNumber();
  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(porgressionElement);
    porgressionElement += progressionStep;
  }
  return progression;
};

const questionMaker = () => {
  const progression = makeProgression();
  const correctAnswer = progression[4];
  progression.splice(4, 1, '..');
  const question = `${progression}`;
  return [question, correctAnswer];
};

export default () => game(description, questionMaker);
