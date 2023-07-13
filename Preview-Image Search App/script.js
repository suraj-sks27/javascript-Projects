const apikey = "8ZuLGDxZLMSwsQPRVkAJSnvcE1my7pbGhy0TuRcl18I";

let formEl = document.querySelector("form");
let searchInputEl = document.getElementById("search-input");
let searchResultEl = document.querySelector(".search-result");
let showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
let searchImages = async () => {
  try {
    //!--------------API CALL------------------------
    inputData = searchInputEl.value;

    let response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    //!-----------------EMPTYING THE CONTAINER----------------
    //   if (page == 1) {
    //     searchResultEl.innerHTML = "";
    //   }
    //!--------------CREATING ELEMENTS FOR CONTAINER USING API RESULT----------------------
    const results = data.results;

    results.forEach((result) => {
      let imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-card");

      let image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;

      let imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResultEl.appendChild(imageWrapper);
    });
    //!----------------INCREMENTING PAGE NO. TO DISPLAY SHOW MORE BUTTON-----------------------
    page++;

    if (page > 1) {
      showMoreButtonEl.style.display = "block";
    }
  } catch (error) {
    searchResultEl.textContent = "Error loading the page. Try something else..";
  }
};

formEl.addEventListener("submit", (event) => {
  if (page >= 1) {
    searchResultEl.innerHTML = "";
  }
  event.preventDefault(); //prevent reload of page on submit
  searchImages();
});
//!--------------ON CLICKING SHOW MORE AGAIN CALLING THE searchImages()---------------
showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
