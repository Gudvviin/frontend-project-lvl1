#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".'); // знакомим пользователя с правилами игры
const solution = () => {
  let i = 1;
  while (i <= 3) {
    const wrong = `'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ...!`;
    const neMber = Math.random() * 100;
    const rNumber = Math.round(neMber); // получаем ранд. число
    console.log(`Question:${rNumber}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    const checkNumber = rNumber % 2 === 0 ? 'yes' : 'no'; // проверяем на четность число
    const verification = answer === checkNumber ? 1 : wrong; // проверям ответ с числом
    if (verification === 1) {
      console.log('Correct!');
    }
    i += 1;
  }
  return 'Congratulations,';
};
console.log(solution());
