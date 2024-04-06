import catalog from "./data.json" assert { type: "json" };

const productNames = catalog.map((item) => item.name);

console.log(productNames);

//  1. Filter products by a specific category.

const category1 = "Accessories";
// const category2 = "Clothing";

const filteredProducts = catalog.filter((item) => {
  if (item.category === category1) {
    return item;
  }
});

console.log(filteredProducts);

//  2. Map out a catalog with just the name and price

const shortCatalog = catalog.map((item) => {
  return { name: item.name, price: item.price };
});

console.log(shortCatalog);

//  3. Reduce the catalog to the total price of all products

const totalPrice = catalog.reduce(
  (accumulator, currentItem) => accumulator + currentItem.price,
  0,
);

console.log(totalPrice);

//  4. Write a function that takes in the catalog and a category, filters by category and then returns the total price of all products in that category.

const 
