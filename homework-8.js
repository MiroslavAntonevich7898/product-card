// Задание 3
const userMiroslav = {
    firstName: "Мирослав",
    lastName: "Антоневич",
    mail: "Miroslav.Antonevich@mail.com",
    age: 27,
    job: "Менеджер по продажам",
    country: "Россия",
    city: "Москва",
    gender: "Мужчина",
    relationshipStatus: "Не женат",
    religion: "Ислам",
};

console.log(userMiroslav);

// Задание 4
const userCar = {
    makeCar: "Lexus",
    modelCar: "IS F",
    yearOfRelease: "2012",
    carColor: "Черный",
    transmission: "8-ступенчатый автомат (SPDS)",
};

userCar.carOwner = userMiroslav;
console.log(userCar);

// Задание 5

// Задание 7
const Top10SngGrapplers = [
    "Гаирбег Ибрагимов",
    "Руслан Абдулаев",
    "Зайнудин Зайнуков",
    "Магомед Абдулкадиров",
    "Роман Долидзе",
    "Николай Ветров",
    "Магомед Джарбаев",
    "Абу Гуданатов ",
    "Бекзат Капашов",
    "Мажид Курахов",
];

console.log(Top10SngGrapplers);

// Задание 8

const CowboyBebop = {
    title: "Ковбой Бибоп",
    release: "1998",
    author: "Хадзимэ Ятатэ",
    genre: "Экшен / Космический нуар",
};

const HajimeNoIppo = {
    title: "Первый шаг",
    release: "2000 – 2014",
    author: "Джордж Морикава",
    genre: "Экшен / Драма",
};

const InitialD = {
    title: "Инициал Ди",
    release: "1998 – 2014",
    author: "Сюити Сигэно",
    genre: "Экшен / Автогонки",
};

const NeonGenesisEvangelion = {
    title: "Евангелион",
    release: "1995 – 1997",
    author: "Хидэаки Анно",
    genre: "Психологическая Драма",
};

const AshitanoJoe = {
    title: "Завтрашний Джо",
    release: "1970 – 1981",
    author: "Икки Кадзивара",
    genre: "Суровая Драма",
};

const Berserk = {
    title: "Берсерк",
    release: "1997",
    author: "Кэнтаро Миура",
    genre: "Экшен / Драма / Дарк-фэнтези",
};

const OldAnimelist = [
    CowboyBebop,
    HajimeNoIppo,
    InitialD,
    NeonGenesisEvangelion,
    AshitanoJoe,
];
OldAnimelist.push(Berserk);
console.log(OldAnimelist);

// Задание 9
const SuzumeNoTojimari = {
    title: "Судзумэ, закрывающая двери",
    release: "2022",
    author: "Макото Синкай",
    genre: "Приключения / Драма / Фэнтези",
};

const TunnelToSummerTheExitOfGoodbyes = {
    title: "Туннель в лето, выход прощаний",
    release: "2022",
    author: "Мэй Хатимоку",
    genre: "Романтическая Драма / Фантастика",
};

const YourName = {
    title: "Твоё имя",
    release: "2016",
    author: "Макото Синкай",
    genre: "Романтическая Драма / Фантастика",
};

const TheGardenOfWords = {
    title: "Сад изящных слов",
    release: "2013",
    author: "Макото Синкай",
    genre: "Романтическая Драма / Повседневность",
};

const AnimeListAfter2010 = [
    SuzumeNoTojimari,
    TunnelToSummerTheExitOfGoodbyes,
    YourName,
    TheGardenOfWords,
];
console.log(AnimeListAfter2010);

const finalAnimeList = [...OldAnimelist, ...AnimeListAfter2010];
console.log(finalAnimeList);

// Задание 10
