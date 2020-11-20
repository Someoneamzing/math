import Matrix from './Matrix.js';
let mat = new Matrix()

const loops = 10000n

let start = process.hrtime.bigint();
for (let i = 0n; i < loops; i ++) {
  let res = Matrix.mult(mat, mat);
}
let end = process.hrtime.bigint();
console.log(`Unwrapped version: ${(end - start) / loops}ns per op`);
start = process.hrtime.bigint();
for (let i = 0n; i < loops; i ++) {
  let res = Matrix.mult2(mat, mat);
}
end = process.hrtime.bigint();
console.log(`     Loop version: ${(end - start) / loops}ns per op`);
