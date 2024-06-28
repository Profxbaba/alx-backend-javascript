export default class HolbertonClass {
  constructor(size, location, faculty) {
    this._size = size;
    this._location = location;
    this._faculty = faculty;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  get faculty() {
    return this._faculty;
  }

  // Setters
  set size(newSize) {
    this._size = newSize;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  set faculty(newFaculty) {
    this._faculty = newFaculty;
  }

  // Methods
  toString() {
    return `Size: ${this._size} - Location: ${this._location} - Faculty: ${this._faculty}`;
  }
}
