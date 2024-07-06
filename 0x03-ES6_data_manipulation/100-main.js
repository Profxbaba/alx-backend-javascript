import { queryAPI } from './100-weak';

const endpoint = new Map();

endpoint.set('users', 1);
endpoint.set('comments', 1);
endpoint.set('posts', 1);

console.log(queryAPI(endpoint));
