let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

console.log(parseInt(input[0]) + parseInt(input[1]));