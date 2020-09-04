export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArray = (array, count) => {
  const randomArray = [];

  for (let i = 0; i <= getRandomInteger(1, count); i++) {
    let randomIndex = getRandomInteger(0, array.length - 1);
    randomArray.push(array[randomIndex]);
  }

  return randomArray;
};