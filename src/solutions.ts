import catalog from "./data.json" assert { type: "json" };

interface Product {
  name: string;
  price: number;
  category: "Clothing" | "Electronics" | "Household" | "Accessories";
}

function getTotalPriceByCategory(cat: Product[], category: string): number {
  let total = 0;
  cat
    .filter((item) => item.category === category)
    .forEach((item) => (total += item.price));
  return total;
}

const total = getTotalPriceByCategory(catalog as Product[], "Clothing");

console.log(total);

// ---

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const todo = (await res.json()) as Todo;
