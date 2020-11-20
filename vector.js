import {MEM} from './common.js';

export default class Vector extends Float32Array {
  constructor(x = 0, y = 0, z = 0) {
    super(3);
    if (x instanceof Vector) {
      this.set(x);
    } else if (!isNaN(x) & !isNaN(y) & !isNaN(z)) {
      this[0] = x;
      this[1] = y;
      this[2] = z;
    } else {
      throw new TypeError("Vector expects either 3 xyz components or a vector to copy.")
    }
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  set x(val) {
    this[0] = val;
  }

  set y(val) {
    this[1] = val;
  }

  set z(val) {
    this[2] = val;
  }

  get w() {
    return this[0];
  }

  get h() {
    return this[1];
  }

  get l() {
    return this[2];
  }

  set w(val) {
    this[0] = val;
  }

  set h(val) {
    this[1] = val;
  }

  set l(val) {
    this[2] = val;
  }

  mult(x = 0, y = NaN, z = 0) {
    if (x instanceof Float32Array && x.length >= 3) {
      this.mult(x[0], x[1], x[2])
    } else if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
      this.x *= x;
      this.y *= y;
      this.z *= z;
    } else if (!isNaN(x) && isNaN(y)) {
      this.x *= x;
      this.y *= x;
      this.z *= x;
    }
    return this;
  }

  static mult(ax, ay, az, bx, by, bz) {
    if (ax instanceof Float32Array && ax.length >= 3) {
      return new Vector(ax).mult(ay, az, bx)
    } else if (!isNaN(ax) && !isNaN(ay) && !isNaN(az)) {
      return new Vector(ax, ay, az).mult(bx, by, bz)
    } else {
      throw new TypeError(`Vector.mult() expects either a Vector-like or three numbers as the first arguments. Got ax: ${ax}, ay: ${ay}, az: ${az}`);
    }
  }

  set(x = 0, y = 0, z = 0) {
    if (!isNaN(x)) {
      this.x = x;
      this.y = y;
      this.z = z;
    } else super.set(x, y ,z);
    return this;
  }

  copy() {
    return new Vector(this);
  }

  add(x = 0, y = 0, z = 0) {
    if (x instanceof Float32Array && x.length >= 3) {
      this.add(x[0], x[1], x[2])
    } else if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
      this.x += x;
      this.y += y;
      this.z += z;
    } else {
      throw new TypeError(`Vector.prototype.add() expects either a Vector-like or three numbers as arguments. Got x: ${x}, y: ${y}, z: ${z}`);
    }
    return this;
  }

  static add(ax, ay, az, bx, by, bz) {
    if (ax instanceof Float32Array && ax.length >= 3) {
      return new Vector(ax).add(ay, az, bx)
    } else if (!isNaN(ax) && !isNaN(ay) && !isNaN(az)) {
      return new Vector(ax, ay, az).add(bx, by, bz)
    } else {
      throw new TypeError(`Vector.add() expects either a Vector-like or three numbers as the first arguments. Got ax: ${ax}, ay: ${ay}, az: ${az}`);
    }
  }

  sub(x = 0, y = 0, z = 0) {
    if (x instanceof Float32Array && x.length >= 3) {
      this.sub(x[0], x[1], x[2])
    } else if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
      this.x -= x;
      this.y -= y;
      this.z -= z;
    } else {
      throw new TypeError(`Vector.prototype.sub() expects either a Vector-like or three numbers as arguments. Got x: ${x}, y: ${y}, z: ${z}`);
    }
    return this;
  }

  static sub(ax, ay, az, bx, by, bz) {
    if (ax instanceof Float32Array && ax.length >= 3) {
      return new Vector(ax).sub(ay, az, bx)
    } else if (!isNaN(ax) && !isNaN(ay) && !isNaN(az)) {
      return new Vector(ax, ay, az).sub(bx, by, bz)
    } else {
      throw new TypeError(`Vector.sub() expects either a Vector-like or three numbers as the first arguments. Got ax: ${ax}, ay: ${ay}, az: ${az}`);
    }
  }

  clampX(low, high) {
    this.x = Math.min(Math.max(this.x, Math.min(low, high)), Math.max(low, high))
    return this;
  }
  clampY(low, high) {
    this.y = Math.min(Math.max(this.y, Math.min(low, high)), Math.max(low, high))
    return this;
  }
  clampZ(low, high) {
    this.z = Math.min(Math.max(this.z, Math.min(low, high)), Math.max(low, high))
    return this;
  }

  distance2(other) {
    return (other.x - this.x) ** 2 + (other.y - this.y) ** 2;
  }

  distance(other) {
    return Math.sqrt(this.distance2(other))
  }
}
