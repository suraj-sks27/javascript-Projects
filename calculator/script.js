const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue == "C") {
      clearResults();
    } else if (buttonValue == "=") {
      calculateResults();
    } else {
      appendValue(buttonValue);
    }
  });
}

const clearResults = () => {
  inputFieldEl.value = "";
};
const calculateResults = () => {
  // ja;
  inputFieldEl.value = eval(inputFieldEl.value);
};
const appendValue = (buttonValue) => {
  inputFieldEl.value += buttonValue;
};
