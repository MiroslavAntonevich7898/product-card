const repaintCardsButton = document.getElementById("repaint-cards-button");
const cards = document.querySelectorAll(".card");

repaintCardsButton.addEventListener("click", () =>
  cards.forEach((card) => card.classList.toggle("active")),
);

console.log("repaintCardsButton", repaintCardsButton);
console.log("cards", cards);

const repaintFirstCardButton = document.getElementById(
  "repaint-first-card-button",
);
const firstCard = document.querySelector("#first-card");

repaintFirstCardButton.addEventListener("click", () => {
  firstCard.style.backgroundColor = "green";
});

console.log("repaint-first-card-button", repaintFirstCardButton);
console.log("#first-card", firstCard);

const repaintBackgroundcolorButton = document.querySelector(
  "#repaint-backgroundcolor-button",
);
const activated = (element) => element.classList.toggle("active");

repaintBackgroundcolorButton.addEventListener("click", (event) => {
  if (activated(event.target)) {
    event.target.style.backgroundColor = "blue";
  } else {
    event.target.style.backgroundColor = "red";
  }
});

const openPageGoogleButton = document.querySelector("#open-page-google-button");
const openGoogle = "https://www.google.com/";

openPageGoogleButton.addEventListener("click", openGoogleFunction);

function openGoogleFunction() {
  const answer = confirm("Вы действительно хотите открыть Google?");
  if (answer == true) {
    window.open(openGoogle);
  } else {
    return;
  }
}

console.log("openPageGoogleButton", openPageGoogleButton);
console.log("openGoogle", openGoogle);
console.log("openopenGoogleFunction", openGoogleFunction);

const notificationWindowButton = document.querySelector(
  "#notification-window-button",
);

notificationWindowButton.addEventListener("click", () =>
  notificationConsoleLog("Всем привет"),
);

function notificationConsoleLog(message) {
  alert(message);
  console.log(message);
}

const ProductCatalogTitile = document.querySelector("h1");

ProductCatalogTitile.addEventListener("mouseenter", (event) => {
  console.log(event.target.textContent);
});
