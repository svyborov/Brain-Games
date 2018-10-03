import readlineSync from 'readline-sync';

export const numberOfQuestions = 3;
export const randomNumber = () => Math.floor(Math.random() * 100);
export const welcome = () => console.log('Welcome to the Brain Games!');
export const userAnswer = () => readlineSync.question('Your answer: ');

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!');
  return userName;
};

export const randomOperator = () => {
  const operators = '+-*';
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};

export const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
