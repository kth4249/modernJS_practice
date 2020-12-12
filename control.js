// [제어문] - 기본적인 것은 생략
// -다중 '?'
let age = 18;

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

console.log( message );
// -> if-else 문으로 변경할 경우
if (age < 3) {
    message = '아기야 안녕?';
  } else if (age < 18) {
    message = '안녕!';
  } else if (age < 100) {
    message = '환영합니다!';
  } else {
    message = '나이가 아닌 값을 입력 하셨군요!';
  }