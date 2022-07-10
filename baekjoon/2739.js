// 여러 줄의 값들을 입력받을 때
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = parseInt(input[0]);

for(let i=1;i<=9;i++){
    console.log(`${num} * ${i} = ${num * i}`);
}