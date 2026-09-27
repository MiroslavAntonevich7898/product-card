import { productCards } from "./product-cards-hmw-10.js";

const IMG_PATH = "./img/photo_cards";

const cardContainer = document.querySelector(".product-catalog__container");
const cardTemplate = document.getElementById("card__template");

function createProductCard(product) {
    const cardClone = cardTemplate.content.cloneNode(true);

    const image = cardClone.querySelector(".card__img");

    image.src = `${IMG_PATH}${product.img}`;
    image.alt = product.title;

    cardClone.querySelector(".card__properties").textContent = product.skinType;
    cardClone.querySelector(".card__title").textContent = product.title;
    cardClone.querySelector(".card__text-description").textContent =
        product.description;

    const compoundList = cardClone.querySelector(".card__compound-list");

    product.compound.forEach((ingredient) => {
        const item = document.createElement("li");

        item.textContent = ingredient;

        compoundList.append(item);
    });

    cardClone.querySelector(".card__price-value").textContent =
        `${product.price} ₽`;

    cardContainer.append(cardClone);
}

const abridgedProductCard = productCards.reduce((acc, product) => {
    acc.push({
        [product.title]: product.description,
    });
    return acc;
}, []);

console.log(abridgedProductCard);

function getCardsCount() {
    while (true) {
        const value = prompt("Сколько карточек отобразить? От 1 до 5");
        const number = Number(value);

        if (number >= 1 && number <= 5) {
            return number;
        }
        alert("Некоректные входные данные");
    }
}

function renderCards(cards, number) {
    const cardsToRender = cards.slice(0, number);

    cardsToRender.forEach((product) => {
        createProductCard(product);
    });
}

const cardsCount = getCardsCount();

renderCards(productCards, cardsCount);
