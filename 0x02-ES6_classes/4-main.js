import Pricing from './4-pricing';
import { Dollar, Euro } from './3-currency';

const p = new Pricing();
console.log(p.convertPrice(100, 'USD')); // Example usage of Pricing class

const dollar = new Dollar('Dollar', 'USD');
const euro = new Euro('Euro', 'EUR');

console.log(dollar.displayFullCurrency());
console.log(euro.displayFullCurrency());
