const repaintButton = document.getElementById("repaint-cards");
const cards = document.querySelectorAll(".card");

repaintButton.addEventListener("click", () =>
  cards.forEach((element) => element.classList.toggle("active")),
);

console.log("repaintButton", repaintButton);
console.log(".card", cards);

const repaintFirstCardButton = document.getElementById("repaint-first-card");
const firstCard = document.querySelector("#first-card");

repaintFirstCardButton.addEventListener("click", () => {
  firstCard.classList.toggle("active")
});



console.log("repaint-first-card", repaintFirstCardButton);
console.log("#first-card", firstCard);

// console.log("10/2")
// alert()
