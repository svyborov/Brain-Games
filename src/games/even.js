import {
  welcome, randomNumber, userAnswer, numberOfQuestions, askUserName, isEven,
} from '..';

export default () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = askUserName();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const rNumber = randomNumber();
    console.log('Question: ', rNumber);
    const answer = userAnswer();
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
