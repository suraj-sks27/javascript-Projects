const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const getAge = (birthdayValue) => {
  let currentDate = new Date();
  let birthdayDate = new Date(birthdayValue);

  let year = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    year--;
  }

  return year;
};

const calculateAge = () => {
  let birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    resultEl.innerHTML = `Your age is <span>${age}</span> ${
      age > 1 ? "years" : "year"
    } old`;
  }
};
btnEl.addEventListener("click", calculateAge);
