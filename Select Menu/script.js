const selectFieldEl = document.getElementById("selectField");
const selectTextEl = document.getElementById("selectText");
const optionsEl = document.querySelectorAll(".options");
const listEl = document.getElementById("list");
const arrowIcon = document.getElementById("arrow-icon");

optionsEl.forEach((element) => {
  element.addEventListener("click", () => {
    selectTextEl.textContent = element.textContent;
    listEl.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  });
});

selectFieldEl.addEventListener("click", () => {
  listEl.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});
