// Константы
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mangasList = [
    "One Piece",
    "Berserk",
    "Fullmetal Alchemist",
    "Dragon Ball",
    "Attack on Titan",
    "Slam Dunk",
    "Monster",
    "Hunter x Hunter",
];

// задание № 2
const shortenedListNumbers = numbersList.filter(
    (number) => number >= 1 && number <= 5,
);

console.log(shortenedListNumbers);
// задание № 3

// console.log(mangasList)

const newMangaList = mangasList.includes("Monster");

console.log(newMangaList);
// задание № 4
const reverseMangasList = (mangasList) => {
    return mangasList.reverse();
};

console.log(reverseMangasList(mangasList));

// задание 6
import { userComments } from "./comments.js";
console.log(userComments);
//задание 7
const filteredUserСomments = userComments.filter((user) =>
    user.email.includes(".com"),
);

console.log(filteredUserСomments);
//задание 8

const newUserComentsList = userComments.map((coment) => {
    coment.id <= 5 ? (coment.postId = 2) : (coment.postId = 1);
    return coment;
});

console.log(newUserComentsList);
//задание 9
const userComentsList = userComments.map((coment) => {
    return { id: coment.id, name: coment.name };
});

console.log(userComentsList);
//задание 10

const reviseduserComentsList = userComments.map(coment => {
    if (coment.body.length > 180) { coment.isInvalid = true } else { coment.isInvalid = false } return coment ;} )

console.log(reviseduserComentsList)
//задание 11

