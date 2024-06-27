// Symbol for deep cloning
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    
    // Attach clone method to symbol
    this[cloneSymbol] = () => {
      const Constructor = this.constructor;
      const clonedCar = new Constructor(this._brand, this._motor, this._color);
      return clonedCar;
    };
  }

  cloneCar() {
    // Call the clone method attached to the symbol
    return this[cloneSymbol]();
  }
}
