const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsAdd = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientRef = document.createElement("li");
    ingredientRef.textContent = ingredient;
    ingredientRef.classList.add("item");
    return ingredientRef;
  });
};

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsAdd(ingredients));
