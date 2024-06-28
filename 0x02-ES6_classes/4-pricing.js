import Currency from './3-currency'; // Adjusted import to remove the extension

export default class Pricing {
  constructor() {
    this._taxPercentage = 0.1;
    this._currency = new Currency();
  }

  applyTax(amount) {
    return amount * (1 + this._taxPercentage);
  }

  convertPrice(amount, currency) {
    return this._currency.convert(amount, currency);
  }
}
