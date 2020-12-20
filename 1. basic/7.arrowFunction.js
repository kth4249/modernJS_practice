// {{ 화살표 함수 (arrow function)}}
// 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법이 있습니다.

// [문법]
// let func = (arg1, arg2, ...argN) => expression
// => 다른방법으로 표현하면
// let func = function(arg1, arg2, ...argN) {
//     return expression;
// };

// 예시)
let sum = (a, b) => a + b;
/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/
console.log( sum(1, 2) ); // 3
// (a, b) => a + b 는 a와 b를 인자로 받는 함수이고, 그 값을 받아 a + b를 처리함.
// -> 따라서 sum이라는 변수에는 함수가 대입되게 됨.

// 인수가 하나도 없을 땐 괄호를 비워놓으면 됩니다. 다만, 이 때 괄호는 생략할 수 없습니다.
let sayHi = () => console.log("안녕하세요!");

sayHi();

// 아래 예시와 같이 함수를 동적으로 만들 수 있습니다.
// let age = prompt("나이를 알려주세요.", 18);

// let welcome = (age < 18) ?
//   () => alert('안녕') :
//   () => alert("안녕하세요!");

// welcome();


// [본문이 여러 줄인 화살표 함수]
// 평가해야 할 표현식이나 구문이 여러 개인 경우 중괄호 안에 평가해야 할 코드를 넣어주어야 함.
// 그리고 return 지시자를 사용해 명시적으로 결과값을 반환해 주어야 함.
let sum2 = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
};
  
console.log( sum2(1, 2) ); // 3
