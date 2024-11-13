#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".'); // знакомим пользователя с правилами игры
const solution = () => {
  let i = 1;
  while (i <= 3) {
    const wrong = `Answer 'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ...!`; // сообщение при ошибки в ответе
    const right = 'Correct!'; // сообщение правильный ответ
    const neMber = Math.random() * 100; // получаем рандомное число
    const rNumber = Math.round(neMber); // рандомное число округляем
    console.log(`Question:${rNumber}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    const checkNumber = rNumber % 2 === 0 ? 'yes' : 'no'; // проверяем на четность число
    const verification = answer === checkNumber ? 1 : 0; // проверям ответ с числом
    if (verification === 1) {
      console.log(right); // при правильном ответе продолжаем игру
    } else {
      return wrong; // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return `Congratulations, ${name}`;
};
console.log(solution());
