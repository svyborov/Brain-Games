import readlineSync from 'readline-sync';

export const randomNumber = () => Math.floor(Math.random() * 100);
export const welcome = () => console.log('Welcome to the Brain Games!');
export const userAnswer = () => readlineSync.question('Your answer: ');
export const numberOfQuestions = 3;
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


export const game = (gameRules, questions, correctAnswers) => {
  welcome();
  console.log(gameRules);
  const userName = askUserName();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    console.log('Question: ', `${questions[i]}`);
    const answer = userAnswer();
    if (correctAnswers[i] === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswers[i]}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
