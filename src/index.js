import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!');
  return userName;
};


const randomNumber = () => Math.floor(Math.random() * 100);
/*
export const randomOperator = () => {
  const operators = '+-*';
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};
*/

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const yesNoEven = (userName) => {
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const rNumber = randomNumber();
    console.log('Question: ', rNumber);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(rNumber);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log('"', answer, '"', ' is wrong answer ;(. Correct answer was ', '"', correctAnswer, '"');
      console.log('Let\'s try again,', userName, '!');
      return;
    }
  }
  console.log('Congratulations,', userName, '!');
};
