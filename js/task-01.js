const listOfCategories = document.querySelector("#categories");

const allCategories = listOfCategories.querySelectorAll(".item");

const categoriesLength = allCategories.length;
console.log(`Number of categories: ${categoriesLength}`);

allCategories.forEach((item) => {
  let category = item.firstElementChild.innerHTML;
  let elements = item.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
