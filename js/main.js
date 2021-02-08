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

getRandomInt(1, 10)


// Проверка строки
const stringCount = (text, sign) => {
  return text.length <= sign ? true : false;
}

stringCount('Это проверочное сообщение', 140)

// Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

// Перемешиваем массив
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let photos = [];
const numberOfPhotos = 25;
const likes = {
  MIN: 15,
  MAX: 200,
}

const names = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
  'Игорь',
  'Виктор',
  'Катя',
  'Денис',
];

const descriptionPhoto = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
]

const addPhotos = () => {
  for (let i = 0; i < numberOfPhotos; i++) {
    photos.push({
      id: [i],
      url: 'photos/' + [i] + '.jpg',
      description: getRandomElementArr(descriptionPhoto),
      likes: getRandomInt(likes.MIN, likes.MAX),
      comments: {
        id: getRandomInt(0, 999),
        avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
        message: getRandomElementArr(comments),
        name: getRandomElementArr(names),
      },
    })
  }
}

addPhotos();
