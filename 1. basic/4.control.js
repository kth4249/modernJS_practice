// [조건문] - 기본적인 것은 생략
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

// [분기문]
// break/continue와 레이블

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`(${i},${j})의 값`, '');
//     // 여기서 멈춰서 아래쪽의 `완료!`가 출력되게 하려면 어떻게 해야 할까요?
//   }
// }
// alert('완료!');

// 레이블(label) 은 반복문 앞에 콜론과 함께 쓰이는 식별자입니다.
// labelName : for(;;) {
//   break labelName;
// }

// 아래와 같이 해결 가능
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`(${i},${j})의 값`, '');
//     // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
//     if (!input) break outer; // (*)
//     // 입력받은 값을 가지고 무언가를 함
//   }
// }
// alert('완료!');

 // * break와 continue는 반복문 안에서만 사용할 수 있고, 레이블은 반드시 break이나 continue 지시자 위에 있어야 합니다.