import {
  welcome, randomOperator, randomNumber, userAnswer, numberOfQuestions, askUserName,
} from '..';

export default () => {
  welcome();
  console.log('What is the result of the expression?\n');
  const userName = askUserName();

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const operator = randomOperator();
    const number1 = randomNumber();
    const number2 = randomNumber();
    console.log('Question: ', `${number1} ${operator} ${number2}`);
    const answer = userAnswer();
    let correctAnswer = 0;
    switch (operator) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        console.log('Вышли за рамки');
    }
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log('"', answer, '"', ' is wrong answer ;(. Correct answer was ', '"', correctAnswer, '"');
      console.log('Let\'s try again,', userName, '!');
      return;
    }
  }
  console.log('Congratulations,', userName, '!');
};
