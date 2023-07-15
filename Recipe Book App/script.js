const api_key = "bc58e98e52f34b5dbafdf1def3c45a87";
const recipeListEl = document.getElementById("recipe-list");

const getRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${api_key}`
  );
  const data = await response.json();

  return data.recipes;
};

const displayRecipes = (recipes) => {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    const recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";
    recipeItemEl.appendChild(recipeImageEl);

    const recipeTitleEl = document.createElement("h2");
    recipeTitleEl.textContent = recipe.title;
    recipeItemEl.appendChild(recipeTitleEl);

    const recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
    <strong>Ingredients : </strong>${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}
    `;
    recipeItemEl.appendChild(recipeIngredientsEl);

    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.textContent = "View Recipe";
    recipeItemEl.appendChild(recipeLinkEl);

    recipeListEl.appendChild(recipeItemEl);
  });
};

//!This function gets trigerred when user visitsthe website and fetches the data
const init = async () => {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipes(recipes);
};

init();
