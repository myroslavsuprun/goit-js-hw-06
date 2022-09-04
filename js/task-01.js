const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}`);

const categoriesShower = function (categories) {
  categories.map(function (category) {
    const categoryTitleRef = category.querySelector("h2");
    console.log(`Category: ${categoryTitleRef.textContent}`);
    const categoryElementsRef = category.querySelectorAll("li");
    console.log(`Elements: ${categoryElementsRef.length}`);
  });
};

categoriesShower([...itemsRef]);
