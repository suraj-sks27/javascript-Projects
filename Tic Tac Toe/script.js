let gameMusic = new Audio("/Tic Tac Toe/assets/music.mp3");
let turnSound = new Audio("/Tic Tac Toe/assets/ting.mp3");
let gameoverSound = new Audio("/Tic Tac Toe/assets/music.mp3");

let boxEl = document.querySelectorAll(".box");
let resetbtnEl = document.getElementById("reset");

let turn = "X";
let isgameover = false;

//!Function to change turn b/w X and 0
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//!Function to check for win
const chechWin = () => {
  let boxTextEl = document.querySelectorAll(".boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  win.forEach((e) => {
    if (
      boxTextEl[e[0]].innerText === boxTextEl[e[1]].innerText &&
      boxTextEl[e[2]].innerText === boxTextEl[e[1]].innerText &&
      boxTextEl[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTextEl[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      boxEl.removeEventListener("click", a);
    }
  });
};

//!GAME logic

//converting the boxElements to an array
Array.from(boxEl).forEach((box) => {
  let a = box.addEventListener("click", () => {
    let boxTextEl = box.querySelector(".boxtext");
    if (boxTextEl.innerText === "" && !isgameover) {
      boxTextEl.innerText = turn;
      turn = changeTurn();
      turnSound.play();
      chechWin();
      document.querySelector(".info").innerText = `Turn for ${turn}`;
    } else {
      box.removeEventListener("click", a);
    }
  });
});

resetbtnEl.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".info").innerText = `Turn for ${turn}`;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
