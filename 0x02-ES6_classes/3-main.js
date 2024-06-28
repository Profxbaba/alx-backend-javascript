import { Dollar, Euro } from './3-currency.js';

const dollar = new Dollar('Dollar', 'USD');
const euro = new Euro('Euro', 'EUR');

console.log(dollar.displayFullCurrency());
console.log(euro.displayFullCurrency());
