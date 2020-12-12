// [연산자]
// 기본적인 연산자는 생략
// - 거듭제곱 연산자 **
console.log( 2 ** 2 ); // 4  (2 * 2)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

console.log( 4 ** (1/2) ); // 2 (1/2 거듭제곱은 제곱근)
console.log( 8 ** (1/3) ); // 2 (1/3 거듭제곱은 세제곱근)


// 단항 연산자 +와 숫자형으로의 변환
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
console.log( +true ); // 1
console.log( +"" );   // 0
console.log( +false ); // 0



// - 값을 반환하는 할당 연산자
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0
// 이런 트릭을 사용하면 코드가 명확하지 않을 뿐만 아니라 가독성도 떨어지기 때문에 사용을 비추천함.


// - 할당 연산자 체이닝
// 할당 연산자는 아래와 같이 여러 개를 연결할 수도 있습니다(체이닝).
a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4


// - 쉼표 연산자
a = (1 + 2, 3 + 4, 5 + 6); // 7
// 마지막 표현식을 제외한 나머지는 버려짐
// 다만 할당 연산자보다 우선순위가 낮기 때문에
// 할당 이후에 있는 쉼표 연산자는 버려짐
a = 1 + 2, 3 + 4; // 3

console.log( a ); // 7 (3 + 4의 결과)


// 연습 문제 //
// a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

// console.log(a + b); // 12
// 3이 나오도록 올바르게 고치시오.
// 풀이
// prompt 로 입력받은 것은 문자열로 입력되기 때문에
// a + b를 했을 때 12가 나옴
// 그러므로 답 =
console.log(+a + +b);



// [비교 연산자]

// - null이나 undefined와 비교하기
console.log(null === undefined); // false
console.log(null == undefined); // true
// 동등 연산자를 사용해 null과 undefined를 비교하면 특별한 규칙이 적용돼 true가 반환

// - null vs 0
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
// 3번의 경우 참을 반환하는 이유는 (기타 비교 연산자의 동작 원리에 따라) null이 숫자형으로 변환돼 0이 되기 때문
// 그런데 2번의 경우 거짓을 반환하는 이유는 
// == (동등 연산자) 의 경우 null, undefined이외의 값과 비교할 경우 무조건 false 반환하기 때문


// -비교가 불가능한 undefined
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)