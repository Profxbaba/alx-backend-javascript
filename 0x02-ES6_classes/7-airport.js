class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.airlines = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get airlines() {
    return this._airlines;
  }

  set airlines(newAirlines) {
    this._airlines = newAirlines;
  }

  addAirline(airline) {
    this.airlines.push(airline);
  }

  printAirports() {
    this.airlines.forEach((airline) => {
      console.log(`${this.code}: ${airline}`);
    });
  }
}

export default Airport;
