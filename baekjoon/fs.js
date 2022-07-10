//fs는 FileSystem의 약자로 파일 처리를 하는 모듈로, 직접 입력 파일을 읽어와서 처리한다.


const fs=require('fs');

//1. 하나의 값을 입력받을 때
const input=fs.readFileSync('/dev/stdin').toString().trim();

//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input1=fs.readFileSync('/dev/stdin').toString().trim().split(' ');

//3. 여러 줄의 값들을 입력받을 때
const input2=fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const input3=fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
//const [n,...arr]=input; 

//5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const input4=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [n,...arr]=input;

//const [n,...arr]=input;과 같이 Destructuring assignment(구조 분해 할당)을 이용하면 좀 더 깔끔하게 분리할 수 있다.
const [n,...arr] = [5,1,2,3,4,5];
n = 5
arr = 5 [1,2,3,4,5];

const text = '가\n나\n다\n';
console.log(text.split('\n')); // ['가', '나', '다', '']
console.log(text.trim().split('\n')); // ['가', '나', '다']