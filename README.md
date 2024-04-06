# TS Practice

## Array Methods Exercises

1. Filter products by a specific category.
2. Map out a catalog with just the name and price.
3. Reduce the catalog to the total price of all products.
4. Write a function that takes in the catalog and a category, filters by category and then returns the total price of all products in that category.

## Promise Exercises

1. Create a function that fetches data from an API using Promises. The function should accept a URL as a parameter and return a Promise that resolves to the parsed JSON data.
1. Use the function to fetch data from a [sample API](https://jsonplaceholder.typicode.com/todos/1) and log the result.
1. Modify the function to use async/await syntax instead of .then() and .catch().

## [Tap](https://node-tap.org/basics/) Tests ✅

If by chance you finish all of these exercises, write the tests!

## [OpenWeatherMap API](https://openweathermap.org/api)

1. Create an account and get an API key.
1. Use the API to fetch the current weather for your city and log the result.

## Closure Exercises

Create a function createCounter that uses a **closure** to maintain the state of a counter and returns an object with two methods: `increment` and `getCount`.

### Requirements

1. Implement a **function** called `createCounter` that takes **no arguments.**
1. Inside the `createCounter` function, declare a variable `count` and **initialize** it to `0`.
1. The `createCounter` function should return an object with the following methods:

- `increment`: This method should increment the count variable by 1.
- `getCount`: This method should return the current value of the count variable.

1. The `count` variable should **not** be accessible from outside the `createCounter` function, ensuring that it can only be modified through the increment method.

### Example

```javascript
const counter = createCounter();
console.log(counter.getCount()); // Output: 0

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
```

### Hints 🧩

1 Remember that a closure allows an inner function to access variables from its outer function's scope, even after the outer function has finished executing.
1 The increment and getCount methods should be defined inside the createCounter function to have access to the count variable.
