const fs = require('fs');
let res = "";

function index(x, y) {
  return x * 4 + y;
}


for (let i = 0; i < 4; i ++) {
  for (let j = 0; j < 4; j ++) {
    res += `res[MEM][${index(i, j)}] = a[MEM][${index(i,0)}] * b[MEM][${index(0,j)}] + a[MEM][${index(i,1)}] * b[MEM][${index(1,j)}] + a[MEM][${index(i,2)}] * b[MEM][${index(2,j)}] + a[MEM][${index(i,3)}] * b[MEM][${index(3,j)}];\r\n`
  }
}

fs.writeFileSync('./matout.js', res);
