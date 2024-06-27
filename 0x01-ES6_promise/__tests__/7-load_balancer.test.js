import loadBalancer from '../7-load_balancer.js';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise((resolve) => {
  setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise((resolve) => {
  setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise((resolve) => {
  setTimeout(resolve, 200, frSuccess);
});

test('loadBalancer returns the value of the promise that resolves first', async () => {
  expect(await loadBalancer(promiseUK, promiseFR)).toBe(ukSuccess);
  expect(await loadBalancer(promiseUKSlow, promiseFR)).toBe(frSuccess);
});

