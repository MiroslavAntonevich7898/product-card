// Константы

import { userComments } from "./comments.js";

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

const filterNumberList = (numbersList) => {
    if (
        !Array.isArray(numbersList) ||
        numbersList.some(
            (number) => typeof number !== "number" || Number.isNaN(number),
        )
    ) {
        return "Некорректные входные данные";
    }
    return numbersList.filter((number) => number >= 1 && number <= 5);
};

console.log(filterNumberList(numbersList));

// задание № 3

const hasMonster = mangasList.includes("Monster");

console.log(hasMonster);

// задание № 4

const reversedMangas = (mangasList) => {
    return mangasList.reverse();
};

console.log(reversedMangas(mangasList));

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

const reviseduserComentsList = userComments.map((coment) => {
    if (coment.body.length > 180) {
        coment.isInvalid = true;
    } else {
        coment.isInvalid = false;
    }
    return coment;
});

console.log(reviseduserComentsList);

//задание 11

const emailList = userComments.map((comment) => {
    return comment.email;
});

console.log(emailList);

const emailListReduce = userComments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(emailListReduce);

//задание 12

const emailsString = emailListReduce.join(" | ");

console.log(emailsString);
