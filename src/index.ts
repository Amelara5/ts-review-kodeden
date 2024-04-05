import catalog from "./data.json" assert { type: "json" };

const productNames = catalog.map((item) => item.name);

console.log(productNames);
