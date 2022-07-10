// 여러 줄의 값들을 입력받을 때
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

/*
    문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
*/
for (let i = 1; i <= input[0]; i++){
    let result = input[i].split(',')
    console.log(parseInt(result[0]) + parseInt(result[1]));
}

