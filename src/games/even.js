import game from '..';

const randomNumber = () => Math.floor(Math.random() * 100);
const gameQuastion = 'Answer "yes" if number even otherwise answer "no".\n';
const questionMaker = () => randomNumber();
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
const correctAnswersMaker = question => isEven(Number(question));

export default () => game(gameQuastion, questionMaker, correctAnswersMaker);
