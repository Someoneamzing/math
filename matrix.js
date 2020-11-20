import {MEM} from './common.js';
function index(x, y) {
  return x * 4 + y;
}

export default class Matrix extends Float32Array {
  constructor() {
    super(16)

  }

  copy(target = new Matrix()) {
    target.set(this)
    return target;
  }

  mult(other) {
    if (other instanceof Matrix) {
      Matrix.mult(this, other).copy(this);
    } else if (other instanceof Vector) {
      return Matrix.mult(this, other);
    } else if (!isNaN(other)) {
      for (let i = 0; i < 16; i ++) {
        this[i] *= other
      }
    }
    return this;
  }

  // static mult(a, b) {
  //   let res = new Matrix();
  //   res[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
  //   res[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
  //   res[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
  //   res[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
  //   res[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
  //   res[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
  //   res[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
  //   res[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
  //   res[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
  //   res[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
  //   res[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
  //   res[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
  //   res[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
  //   res[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
  //   res[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
  //   res[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
  //   return res;
  // }

  static mult(a, b) {
    let res;
    if (b instanceof Matrix) {
      res = new Matrix();
      for (let i = 0; i < 4; i ++) {
        for (let j = 0; j < 4; j ++) {
          res[index(i,j)] = a[index(i,0)] * b[index(0,j)] + a[index(i,1)] * b[index(1,j)] + a[index(i,2)] * b[index(2,j)] + a[index(i,3)] * b[index(3,j)];
        }
      }
    } else if (b instanceof Vector) {
      res = new Vector();
      for (let i = 0; i < 4; i ++) {
          res[i] = a[index(i,0)] * b[0] + a[index(i,1)] * b[1] + a[index(i,2)] * b[2];
      }
    } else if (!isNaN(b)) {
      res = new Matrix();
      for (let i = 0; i < 16; i ++) {
        res[i] = a[i] * b;
      }
    }
    return res;
  }
}
