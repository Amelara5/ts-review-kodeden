import catalog from "./data.json" assert { type: "json" };

const productNames = catalog.map((item) => item.name);

console.log(productNames);

//  1. Filter products by a specific category.

const category1 = "Accessories";
const category2 = "Clothing";

const filteredProducts = catalog.filter((item) => {
  if (item.category === category1) {
    return item;
  }
});

console.log(filteredProducts);
