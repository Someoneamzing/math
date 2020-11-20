import Vector from './vector.js';

export default class Rectangle {
  constructor(x, y, w, h) {
    if (x instanceof Float32Array && x.length >= 3) {
      this.pos = new Vector(x);
      this.size = new Vector(y, w);
    } else {
      this.pos = new Vector(x, y);
      this.size = new Vector(w, h);
    }
  }

  get l() {
    return Math.min(this.pos.x, this.pos.x + this.size.x);
  }

  get r() {
    return Math.max(this.pos.x, this.pos.x + this.size.x);
  }

  get t() {
    return Math.min(this.pos.y, this.pos.y + this.size.y);
  }

  get b() {
    return Math.max(this.pos.y, this.pos.y + this.size.y);
  }

  intersect(other) {
    if (other instanceof Float32Array && other.length >= 3) {
      return !(other[0] < this.l || other[0] > this.r || other[1] < this.t || other[1] > this.b)
    } else if (other instanceof Rectangle) {
      return !(other.l > this.r || other.r < this.l ||
               other.t > this.b || other.b < this.t)
    }
  }
}
