import { z } from "zod";
import catalog from "./data.json" assert { type: "json" };

const productNames = catalog.map((item) => item.name);

console.log(productNames);

//  Array Methods Exercises
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

//  Promise Exercises
//  1. Create a function that fetches data from an API using Promises. The function should accept a URL as a parameter and return a Promise that resolves to the parsed JSON data.
//  2. Use the function to fetch data from a sample API and log the result. (https://jsonplaceholder.typicode.com/todos/1)
//  3. Modify the function to use async/await syntax instead of .then() and .catch().

const ToDoSchema = z.object({
  username: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

type ToDo = z.infer<typeof ToDoSchema>;

const urlSchema = z.string().url();
const urlOfAPI = "https://jsonplaceholder.typicode.com/todos/1";

async function callAPI(URL: z.infer<typeof urlSchema>): Promise<ToDo> {
  const res = await fetch(URL);
  const json = await res.json();
  return ToDoSchema.parse(json);
}

console.log(callAPI(urlOfAPI));

//  OpenWeatherMap API
//  1. Create an account and get an API key.
//  2. Use the API to fetch the current weather for your city and log the result.

//  lat = 38.789280
//  long = -77.187204

const lat = 44.34;
const long = 10.99;

const coordinates = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}lon=${long}&appid=9335ce1949d9e65b7903ad076087bdba&units=metric`;

async function myWeather() {
  try {
    const res = await fetch(coordinates);
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

// myWeather();

//  Closure Exercises
//  Create a function createCounter that uses a closure to maintain the state of a counter and returns an object with two methods: increment and getCount.

function createCounter(): any {
  let count = 0;
  function increment(): void {
    console.log("The function was called");
    count = count + 1;
    console.log(count);
  }

  function getCount(): number {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log("CLOSURE ", counter.getCount());
// createCounter().increment();
// createCounter().increment();

// console.log("CLOSURE EXERCISE ", createCounter().count);
