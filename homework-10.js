import { productCards } from "./product-cards-hmw-10.js";

const cardTemplate = document.getElementById("card__template");
const cardContainer = document.querySelector(".product-catalog__container");

function createProductCard(product) {
    const cardClone = cardTemplate.content.cloneNode(true);

    const image = cardClone.querySelector(".card__img");

    image.src = product.img;
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

productCards.forEach((product) => {
    createProductCard(product);
});
