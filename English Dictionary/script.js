const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titletEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

const fetchAPI = async (word) => {
  try {
    //!to display a loading message before getting the meaning of the word
    infoTextEl.style.display = "block";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;

    //!Removing the previous meaning(if any):
    meaningContainerEl.style.display = "none";

    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let data = await response.json();

    //if the word doesnt exist
    if (data.title) {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";

      titletEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      //if word exist
      //!Removing the loading text
      infoTextEl.style.display = "none";

      //!Displaying the meaning
      meaningContainerEl.style.display = "block";

      audioEl.style.display = "inline-flex";

      titletEl.innerText = data[0].word;
      meaningEl.innerText = data[0].meanings[0].definitions[0].definition;
      audioEl.src = `${data[0].phonetics[0].audio}`;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `An error occurred..check your internet connection`;
  }
};

inputEl.addEventListener("keyup", (e) => {
  //!if the user enters a value and then presses
  if (e.target.value && e.key == "Enter") {
    fetchAPI(e.target.value);
  }
});
