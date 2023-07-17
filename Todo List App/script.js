const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");

//!To create li when a task is added
const addTask = () => {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
};

button.addEventListener("click", addTask);

//! To mark check or delete the task
listContainer.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "LI") {
    //to mark checked
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    //to delete
    e.target.parentElement.remove();
    saveData();
  }
});

//!to save the task in the LS
const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

//!to show all the task in local storage on browser relode
const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTask();
