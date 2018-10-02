import readlineSync from 'readline-sync';
export default () => {
  const UserName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', UserName, '!');
};
