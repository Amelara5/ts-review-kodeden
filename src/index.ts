import catalog from "./data.json" assert { type: "json" };

const productNames = catalog.map((item) => item.name);

console.log(productNames);

//  1. Filter products by a specific category.

const category1 = "Accessories";
const category2 = "Clothing";

const filteredProducts = catalog.filter((item) => item.category === category1);

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

//  For me to properly give 'catalog' its type I have to create an 'interface' with all of the properties that 'catalog' has. When using interfaces remember to capitalize the use camel case (capitalize every first word).

interface Product {
  name: string;
  price: number;
  category: "Clothing" | "Accessories";
}

function filteredItems(cat: Product[], category: string): number {
  const filteredItems = cat.filter((item) => item.category === category);
  const totalPriceForFilteredItems: number = filteredItems.reduce(
    (accumulator: number, currentItem) => accumulator + currentItem.price,
    0,
  );
  return totalPriceForFilteredItems;
}

console.log(filteredItems(catalog as Product[], category2));
