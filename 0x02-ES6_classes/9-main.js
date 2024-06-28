import hoistingSample from './9-hoisting';

const getRandNum = () => Math.floor(Math.random() * 100);

console.log(`Random number: ${getRandNum()}`);

hoistingSample();
