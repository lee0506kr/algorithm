let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=1; i<=input[0];i++){
    let result = input[i].split(' ');;
    console.log(parseInt(result[0]) + parseInt(result[1]));
}