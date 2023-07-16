const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((Element) => {
  Element.addEventListener("click", () => {
    removeActiveClassFromRatings();
    selectedRating = Element.innerText;
    Element.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating != "") {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <br><br>
    <strong>Feedback : ${selectedRating}</strong>
    <br><br>
    <p style="font-size: 16px">We'll use your feedback to improve our customer support.</p>
    `;
  }
});

const removeActiveClassFromRatings = () => {
  ratingEls.forEach((element) => {
    element.classList.remove("active");
  });
};
