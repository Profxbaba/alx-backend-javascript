import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };

console.log(weakMap.get(endpoint));

try {
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint); // This will throw an error
} catch (error) {
  console.error(error.message);
}

console.log(weakMap.get(endpoint)); // This won't execute due to the error
