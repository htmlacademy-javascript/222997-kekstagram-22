function getRandomIntInclusive(min, max) {
  if (min > max) {
    alert('error: min > max')
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(getRandomIntInclusive(25, 15));


function lengthCheck(string, strMaxLength) {
  string = string.length;
  if (string > strMaxLength) {
    return alert('Ошибка: превышено количество символов')
  }
}

lengthCheck('test test test', 5)

