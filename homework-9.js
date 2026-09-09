// Константы

import { userComments } from "./comments.js";

function isValidArray(data, expectedType) {
    if (!Array.isArray(data)) {
        return false;
    }
    return !data.some(
        (item) => typeof item !== expectedType || Number.isNaN(item),
    );
}

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
    if (!isValidArray(numbersList, "number")) {
        return "Некорректные входные параметры";
    }
    return numbersList.filter((number) => number >= 1 && number <= 5);
};

console.log(filterNumberList(numbersList));

// задание № 3

function hasManga(manga) {
    if (typeof manga !== "string") {
        return "Некорректные входные параметры";
    }
    return mangasList.includes(manga);
}

console.log(hasManga("Monster"));

// задание № 4

const reverseMangaArray = (mangasList) => mangasList.reverse();

console.log(reverseMangaArray(mangasList));

//задание 7

const filteredUserComments = userComments.filter((user) =>
    user.email.includes(".com"),
);

console.log(filteredUserComments);

//задание 8

const newComentsList = (coments) => {
    if (!isValidArray(coments, "object")) {
        return "Некоректные входные данные";
    }
    return coments.map((coment) => {
        coment.postId = coment.id <= 5 ? 2 : 1;
        return coment;
    });
};

console.log(newComentsList(userComments));

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
