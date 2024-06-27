import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());

const convertedPrice = Pricing.convertPrice(100, 1.18);
console.log('Converted price:', convertedPrice);
