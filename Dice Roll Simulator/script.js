const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyListArr = [];
const rollDice = () => {
  let rollResult = Math.floor(Math.random() * 6) + 1;
  let diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;

  historyListArr.push(rollResult);
  updateRollHistory();
};

const updateRollHistory = () => {
  rollHistoryEl.innerHTML = "";

  for (let i = 0; i < historyListArr.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyListArr[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
};

const getDiceFace = (rollResult) => {
  switch (rollResult) {
    case 1:
      return "&#x2680;";
    case 2:
      return "&#x2681;";
    case 3:
      return "&#x2682;";
    case 4:
      return "&#x2683;";
    case 5:
      return "&#x2684;";
    case 6:
      return "&#x2685;";
    default:
      return "";
  }
};

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
