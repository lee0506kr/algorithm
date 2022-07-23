let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

/*
    배열에 값을 추가하는 함수 
    .push() : 배열의 맨 끝에 값을 추가한다.
    .unshift() : 배열의 맨 앞에 값을 추가한다.
    배열에 값을 제거하는 함수 
    .pop() : 배열의 맨 끝에 값을 제거한다.
    .shift() : 배열의 맨 앞에 값을 제거한다.
*/

const stack = [];
const result = [];

for (let i = 0; i < input.shift(); i++) {        
    switch(input[i]) {
        case 'pop': 
          result.push(stack.pop() || -1);
          break;

        case 'size': 
          result.push(stack.length);
          break;

        case 'empty': 
          result.push(stack[0] ? 0 : 1);
          break;

        case 'top': 
          result.push(stack[stack.length - 1] || -1);
          break;

        default: 
          stack.push(input[i].split(" ")[1]);
          break;
    }
}

console.log(result.join('\n'));