import readlineSync from 'readline-sync';

const numberOfQuestions = 3;
const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!');
  return userName;
};


export default (description, questionMaker) => {
  console.log('Welcome to the Brain Games!');
  console.log(description, '\n');
  const userName = askUserName();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const questionAnswer = questionMaker();
    const question = questionAnswer[0];
    const correctAnswer = questionAnswer[1];
    console.log('Question: ', `${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
