// [자료형]
// 자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있음
// 따라서 변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있음.
let message = "hello";
message = 123456;
// 이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를
// ‘동적 타입(dynamically typed)’ 언어라고 부릅니다.


// - 숫자형
// 숫자형(number type) 은 정수 및 부동소수점 숫자(floating point number)를 나타냄
let n = 123;
n = 12.345;

// Infinity : 무한대
n = 1 / 0;
console.log(n);
console.log(Infinity);

// NaN : 계산 중에 에러가 발생함을 뜻함. 
// 부정확하거나 정의되지 않은 수학 연산을 사용할 경우 발생
console.log("숫자가 아님" / 2); // NaN
console.log("숫자가 아님" / 2 + 5); // NaN
// NaN 에 어떤 연산을 해도 무조건 NaN이 나옴
// 고로, 어떤 말이 안 되는 수학 연산을 하더라도 NaN을 반환할 뿐 스크립트가 죽지 않음. = 수학 연산이 안전함.

// BigInt
// 내부 표현 방식 때문에 자바스크립트에선 2^53-1 (약 9000조) 보다 큰 값 혹은
// -(2^53-1)보다 작은 정수는 숫자형을 통해 나타낼 수 없음.
// 그리하여 채택된 자료형으로 정수리터럴 끝에 'n'을 붙이면 만둘 수 있음.
const bicInt = 1234567890123456789012345678901234567890n;
n = bicInt;
console.log(bicInt);
console.log(n);



// - 문자형
// 큰따옴표: "Hello"
// 작은따옴표: 'Hello'
// 역 따옴표(백틱, backtick): `Hello`

// 큰따옴표, 작음따옴표는 기본적인 따옴표로 차이가 없음.
let str = "Hello";
let str2 = 'Single quotes are ok too';

// 역 따옴표(백틱, backtick)는 변수나 표현식을 감싼 후 ${…}안에 넣어주면,
// 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있음.
let phrase = `can embed another ${str}`;

console.log(str);
console.log(str2);
console.log(phrase); // can embed another Hello

// ${} 안에 변수 및 수학 관련 표현식이 가능
console.log(`result = ${1+3}`);



// - 불린형 (Boolean)
// 불린형(논리 타입)은 true 와 false 두 가지 값밖에 없는 자료형.
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

// 비교 결과를 저장할 때에도 사용
let isGreater = 4 > 1;
console.log(isGreater);



// - 'null' 값
// null 값은 오로지 null 값만 포함하는 별도의 자료형을 만듭니다.
let age = null;
// 자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다. 
// 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용합니다.
// : 보통 참조형 변수가 객체를 가르키고 있지 않을 때 보통 사용한다는 의미하는 듯 함.
// 하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
// : 변수에 값이 비어있음을 의미.
// let age = null;은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.


// - 'undefined' 값
// undefined 값도 null 값처럼 자신만의 자료형을 형성합니다.
// undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
let age2;
console.log(age2); // 'undefined'가 출력됩니다

// 'null' 과 'undefined'에 대한 정리
// 변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null을 사용하세요.
// : 의도적으로 변수가 비어있음을 알릴 때 null
// undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 남겨둡시다
// : 변수를 선언하였으나 값이 할당되지 않았음을 알릴 때 undefined


// - 객체와 심볼
// 객체(object)형은 특수한 자료형입니다.
// 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다.
// 반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.
// 이런 특징 때문에 자바스크립트에서 객체는 좀 더 특별한 취급을 받습니다.
// 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다


// *typeof 연산자
// typeof 연산자는 인수의 자료형을 반환합니다. 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용합니다.

// typeof 연산자는 두 가지 형태의 문법을 지원합니다.

// 연산자: typeof x
// 함수: typeof(x)
// 괄호가 있든 없든 결과가 동일합니다.

// typeof x를 호출하면 인수의 자료형을 나타내는 문자열을 반환합니다.

console.log(typeof undefined); // "undefined" console.log();

console.log(typeof 0); // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"  (1)
// Math는 수학 연산을 제공하는 내장 객체이므로 "object"가 출력됩니다.

console.log(typeof null); // "object"  (2)
// typeof null의 결과는 "object"입니다. null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만,
// 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다.
// 언어 자체의 오류이므로 null이 객체가 아님에 유의하시기 바랍니다.

console.log(typeof console.log); // "function"  (3)
// typeof는 피연산자가 함수면 "function"을 반환합니다.
// 그러므로 typeof alert는 "function"을 출력해줍니다. 그런데 '함수’형은 따로 없습니다. 함수는 객체형에 속합니다.
// 이런 동작 방식이 형식적으론 잘못되긴 했지만, 아주 오래전에 만들어진 규칙이었기 때문에 하위 호완성 유지를 위해 남겨진 상태입니다.
// 한편, 실무에선 이런 특징이 매우 유용하게 사용되기도 합니다.