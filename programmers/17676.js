function solution(lines) {
  var answer = 0;

  // 종결점
  /* 
    예) "2016-09-15 01:00:04.001 2.0s"
    x.split(" ")[1]
    HH:mm:ss 
  */
  const endTime = lines.map((x) => Second(x.split(" ")[1]));

  // 시작점 구하기
  /*
      2.0s   
      초 단위기 때문에 * 1000
  */
  const startTime = lines.map(
    (x, i) => endTime[i] - x.split(" ")[2].replace("s", "") * 1000 + 1
  );
  // startTime 과 endTime 합친후 정렬
  const points = startTime.concat(endTime).sort((a, b) => a - b);

  // startTime 과 endTime 합친 값에 따른
  for (let i = 0; i < points.length; i++) {
    let cnt = 0;
    for (let j = 0; j < startTime.length; j++) {
      //제일 난관인 999를 더하는 부분. 시작과 끝에 +1씩 했으니 1001만큼 검사함. 시작인 0과 끝인 1001포함.
      if (points[i] + 999 >= startTime[j] && points[i] <= endTime[j]) {
        cnt++;
      }
    }
    if (answer < cnt) answer = cnt;
  }

  return answer;
}

/* 
    밀리초 구하기는 식 나중에 또 사용할 수 있으니 기억해 두기
    1시간 = 60분 (60 * 60 * 1,000 = 3,600,000 밀리초)
    1분 = 60초 (60 * 1,000 = 60,000 밀리초)
    1초 = 1000 밀리초 
*/
const Second = (time) => {
  return (
    time.split(":")[0] * 3600000 +
    time.split(":")[1] * 60000 +
    time.split(":")[2] * 1000
  );
};
