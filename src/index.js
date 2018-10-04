import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const userAnswer = () => readlineSync.question('Your answer: ');
const numberOfQuestions = 3;
const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!');
  return userName;
};


export default (description, questionMaker) => {
  welcome();
  console.log(description);
  const userName = askUserName();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const questionAnswer = questionMaker();
    const question = questionAnswer[0];
    const correctAnswer = questionAnswer[1];
    console.log('Question: ', `${question}`);
    const answer = userAnswer();
    if (String(correctAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
