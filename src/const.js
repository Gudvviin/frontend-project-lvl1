/* eslint-disable max-len */
const right = () => {
  const i = 'Correct!'; // сообщение правильный ответ
  return i;
};
const randomOne = () => {
  const result = Math.round(Math.random() * 100);
  return result;
};
const randomeTwo = () => {
  const result = Math.round(Math.random() * 100);
  return result;
};
const errorUser = () => {
  const result = ' is wrong answer ;(. Correct answer was ';
  return result;
}; // сообщение при ошибке
const simile = (a, b) => {
  let result = 0;
  if (a === b) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
};
const definiteRandom = (min, max) => Math.round(Math.random() * (max - min) + min); // рандомное число от и до
export {
  right, randomOne, randomeTwo, errorUser, simile, definiteRandom,
};
