#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?'); // знакомим пользователя с правилами игры
const solution = () => {
  let i = 1;
  let s = 0; // из полученного числа делаем символ
  let result = 0; // из читаемого символа делаем решение
  while (i <= 3) {
    const neMber = Math.random() * 100; // получаем рандомное число 1
    const rNumber = Math.round(neMber); // рандомное число округляем 1
    const twoRNumber = Math.random() * 100; // рандомное число 2
    const twoNumber = Math.round(twoRNumber); // округляем рандомное число 2
    const rNSign = Math.floor(Math.random() * 4); // рандомное число на знак
    if (rNSign === 0) {
      s = '/';
    } else if (rNSign === 1) {
      s = '*';
    } else if (rNSign === 2) {
      s = '-';
    } else {
      s = '+';
    }
    const exRound = `${rNumber}${s}${twoNumber}`; // рандомное выражение
    console.log(`Question:${exRound}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    if (s === '/') {
      result = rNumber / twoNumber;
    } else if (s === '*') {
      result = rNumber * twoNumber;
    } else if (s === '-') {
      result = rNumber - twoNumber;
    } else {
      result = rNumber + twoNumber;
    }
    const verification = Math.round(result) === Number(Math.round(answer)) ? 1 : 0;
    const wrong = `${answer} is wrong answer ;(. Correct answer was ${result}.
    Let's try again, ${name}!`; // сообщение при ошибки в ответе
    const right = 'Correct!'; // сообщение правильный ответ
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
