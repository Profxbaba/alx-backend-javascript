export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export class Dollar extends Currency {
  constructor(name, code) {
    super(code, name);
    this.locations = ['USA', 'Ecuador', 'Zimbabwe'];
  }

  displayFullCurrency() {
    return `${this.name} (${this.code}), from ${this.locations.join(', ')}`;
  }
}

export class Euro extends Currency {
  constructor(name, code) {
    super(code, name);
    this.locations = ['Eurozone', 'Monaco', 'Montenegro'];
  }

  displayFullCurrency() {
    return `${this.name} (${this.code}), from ${this.locations.join(', ')}`;
  }
}
