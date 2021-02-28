// Случайное число
const getRandomInt = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверка строки
const stringCount = (text, sign) => {
  return text.length <= sign ? true : false;
}

// Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

export { getRandomInt, stringCount, getRandomElementArr };
