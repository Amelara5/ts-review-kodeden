import { z } from "zod";
import catalog from "./data.json" assert { type: "json" };

const productNames = catalog.map((item) => item.name);
// console.log(productNames);

//  Array Methods Exercises
//  1. Filter products by a specific category.

const category1 = "Accessories";
const category2 = "Clothing";

const filteredProducts = catalog.filter((item) => item.category === category1);

// console.log(filteredProducts);

//  2. Map out a catalog with just the name and price

const shortCatalog = catalog.map((item) => {
  return { name: item.name, price: item.price };
});

// console.log(shortCatalog);

//  3. Reduce the catalog to the total price of all products

const totalPrice = catalog.reduce(
  (accumulator, currentItem) => accumulator + currentItem.price,
  0,
);

// console.log(totalPrice);

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

// console.log(filteredItems(catalog as Product[], category2));

//  Promise Exercises
//  1. Create a function that fetches data from an API using Promises. The function should accept a URL as a parameter and return a Promise that resolves to the parsed JSON data.
//  2. Use the function to fetch data from a sample API and log the result. (https://jsonplaceholder.typicode.com/todos/1)
//  3. Modify the function to use async/await syntax instead of .then() and .catch().

const ToDoSchema = z.object({
  userId: z.number(),
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
  console.log(json);
  return ToDoSchema.parse(json);
}

// console.log("API Function called ", callAPI(urlOfAPI));

//  OpenWeatherMap API
//  1. Create an account and get an API key.
//  2. Use the API to fetch the current weather for your city and log the result.

const lat = 38.78928;
const long = -77.187204;

const coordinates = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}lon=${long}&appid=9335ce1949d9e65b7903ad076087bdba&units=metric`;

async function fetchWeather() {
  const res = await fetch(coordinates);
  const json = await res.json();
  console.log("WEATHER API ", json);
}

// await fetchWeather();

const baseURL1 = "https://swapi.dev/api/starships/9/"; //  SWAPI 👍🏽 https://swapi.dev/documentation
const baseURL2 = "https://pokeapi.co/api/v2/location-area/2/"; //  PokeAPI 👍🏽 https://pokeapi.co/docs/v2#location-areas
const baseURL3 = "https://openlibrary.org/search.json?"; //  OpenLibrary 👍🏽 https://openlibrary.org/dev/docs/api/search
const book = "title=memoirs of Sherlock Holmes";

//  SCHEMA TESTING
const StarWarsSchema = z.object({
  name: z.string(),
  model: z.string(),
  manufacturer: z.string(),
  cost_in_credits: z.string(),
  crew: z.string(),
  passengers: z.string(),
  starship_class: z.string(),
});

const WildPokemon = z.array(
  z.object({
    pokemon: z.string(),
  }),
);
const PokemonSchema = z.object({
  pokemon_encounters: WildPokemon,
});
const OpenLibrarySchema = {};

async function apiTesting(url: string): Promise<unknown> {
  const res = await fetch(url);
  const jsonRes = await res.json();
  console.log("API TESTING ", jsonRes.pokemon_encounters);
  // const validatedJSONResponse = StarWarsSchema.parse(jsonRes);
  // console.log("VALIDATED RESPONSE ", validatedJSONResponse);
  return jsonRes;
}

await apiTesting(baseURL2);

//  Closure Exercises
//  Create a function createCounter that uses a closure to maintain the state of a counter and returns an object with two methods: increment and getCount.

function createCounter(): any {
  let count = 0;
  function increment(): void {
    count = count + 1;
  }

  function getCount(): number {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();
counter.increment();
counter.increment();
// console.log("CLOSURE ", counter.getCount());
