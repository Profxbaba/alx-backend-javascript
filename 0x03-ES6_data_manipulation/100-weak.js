// Create a WeakMap instance to store endpoint query counts
export const weakMap = new WeakMap();

// Function to query API and track endpoint query counts
export function queryAPI(endpoint) {
  // Initialize query count for the endpoint if it doesn't exist in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count for the endpoint
  let count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if query count has reached 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return count;
}
