export default class Buiilding {
  constructor(sqft) {
    if (this.constructor !== Buiilding) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (this.constructor !== Buiilding) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
