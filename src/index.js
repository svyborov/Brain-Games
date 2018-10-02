import readlineSync from 'readline-sync';

export const AskUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!');
  return userName;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const YesNo = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const yes = 'yes';
    const no = 'no';
    const n = Math.floor(Math.random() * 100);
    console.log('Question: ', n);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(n)) {
      if (answer === yes) {
        console.log('Correct!');
      } else {
        console.log('"', answer, '"', ' is wrong answer ;(. Correct answer was ', '"', yes, '"');
        console.log('Let\'s try again,', userName, '!');
        return;
      }
    } else if (!isEven(n)) {
      if (answer === no) {
        console.log('Correct!');
      } else {
        console.log('"', answer, '"', ' is wrong answer ;(. Correct answer was ', '"', no, '"');
        console.log('Let\'s try again,', userName, '!');
        return;
      }
    }
  }
  console.log('Congratulations,', userName, '!');
};
