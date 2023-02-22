const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
let tagsToAdd = [];

ingredients.forEach((ingredient) => {
  let tag = document.createElement("li");
  tag.textContent = `${ingredient}`;
  tag.classList.add("item");
  tagsToAdd.push(tag);
});

listOfIngredients.append(...tagsToAdd);
